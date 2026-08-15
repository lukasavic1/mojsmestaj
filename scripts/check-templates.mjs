// Opens every template preview at 1280 / 768 / 375 and fails on any horizontal
// overflow. Needs a running dev server and `npm i -D playwright` (+ browsers).
import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:3000/sr";
const NAMES = ["luxury", "boutique", "urban", "nature", "glamping"];
const VIEWPORTS = [
  { id: "desktop", index: 0, width: 1280 },
  { id: "tablet", index: 1, width: 768 },
  { id: "mobile", index: 2, width: 375 },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const problems = [];

page.on("pageerror", (error) => problems.push(`console error: ${error.message}`));

await page.goto(BASE, { waitUntil: "networkidle" });
const consent = page.getByRole("button", { name: /Prihvatam|Accept/i }).first();
if (await consent.count()) await consent.click().catch(() => {});

for (const [i, name] of NAMES.entries()) {
  await page.locator("#sabloni article button").nth(i * 2).click();
  await page.locator(".tpl-preview-scroll").waitFor();

  for (const vp of VIEWPORTS) {
    await page.locator('[role="group"] button').nth(vp.index).click();
    await page.waitForTimeout(700);

    const frame = page.locator(".tpl-preview-scroll");
    // Scroll through the whole page so lazy content and sticky bars settle.
    const height = await frame.evaluate((el) => el.scrollHeight);
    for (let y = 0; y < height; y += 900) {
      await frame.evaluate((el, top) => el.scrollTo({ top }), y);
      await page.waitForTimeout(120);
    }
    await frame.evaluate((el) => el.scrollTo({ top: 0 }));
    await page.waitForTimeout(200);

    const report = await frame.evaluate(
      ({ target }) => {
        const root = document.querySelector(".tpl-preview-scroll");
        const overflowH = root.scrollWidth - root.clientWidth;
        const wide = [];
        for (const el of root.querySelectorAll("*")) {
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) continue;
          const rootRect = root.getBoundingClientRect();
          const scale = rootRect.width / target;
          const right = (rect.right - rootRect.left) / scale;
          const left = (rect.left - rootRect.left) / scale;
          if (right > target + 1 || left < -1) {
            const style = getComputedStyle(el);
            if (style.position === "fixed" || style.visibility === "hidden") continue;
            wide.push(
              `${el.tagName.toLowerCase()}.${(el.className || "").toString().split(" ").slice(0, 3).join(".")} [${Math.round(left)}..${Math.round(right)}]`,
            );
          }
        }
        return { overflowH, scrollHeight: root.scrollHeight, wide: wide.slice(0, 6) };
      },
      { target: vp.width },
    );

    const status = report.overflowH <= 0 && report.wide.length === 0 ? "OK" : "FAIL";
    console.log(
      `${status.padEnd(4)} ${name.padEnd(9)} ${vp.id.padEnd(8)} h=${report.scrollHeight}px overflowX=${report.overflowH}px`,
    );
    if (status === "FAIL") {
      problems.push(`${name}/${vp.id}: overflowX=${report.overflowH} ${report.wide.join(" | ")}`);
    }
  }

  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
}

await browser.close();

if (problems.length) {
  console.log("\nPROBLEMS:");
  for (const problem of problems) console.log(" - " + problem);
  process.exit(1);
}
console.log("\nAll templates clean across desktop / tablet / mobile.");
