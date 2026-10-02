import type { Dictionary } from "../lib/dictionaries";
import WhatsAppCta from "./WhatsAppCta";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// One icon per condition, in the order of guaranteeTerm1..4.
const termIcons = [
  // An inquiry: a message from a guest
  <path key="msg" d="M4 6h16v10H9l-4 4v-4H4V6zm4 4h8M8 13h5" {...stroke} />,
  // You send photos and reply on time
  <path key="photo" d="M4 6h16v13H4zM4 15l4.5-4 3.5 3 3-2.5 5 3.5M12 3v6m-2.5-2.5L12 9l2.5-2.5" {...stroke} />,
  // The clock starts when the ads go live
  <path key="cal" d="M5 6h14v13H5zM5 10h14M9 4v4m6-4v4m-3 5v3l2 1" {...stroke} />,
  // No refund: we keep working instead
  <path key="loop" d="M4 12a8 8 0 0113.7-5.6L20 9M20 4v5h-5M20 12a8 8 0 01-13.7 5.6L4 15m0 5v-5h5" {...stroke} />,
];

export default function Guarantee({ dict }: { dict: Dictionary }) {
  const terms = [dict.guaranteeTerm1, dict.guaranteeTerm2, dict.guaranteeTerm3, dict.guaranteeTerm4];

  return (
    <section className="px-6 py-8" id="garancija">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-8 rounded-[28px] border-2 border-olive/40 bg-olive/[0.06] px-6 py-12 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div>
            <div className="mb-6 flex items-center gap-5">
              <GuaranteeSeal label={`${dict.guaranteeEyebrow} · ${dict.offerGuaranteeStat} · `} />
              <div>
                <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive before:block before:h-[2px] before:w-[18px] before:bg-olive">
                  {dict.guaranteeEyebrow}
                </div>
                <div className="font-display text-[56px] font-semibold leading-none text-sea">
                  {dict.offerGuaranteeStat}
                </div>
              </div>
            </div>
            <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px]">
              {dict.guaranteeTitle}
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink">{dict.guaranteeText}</p>
            <WhatsAppCta dict={dict} className="mt-7" />
          </div>

          <div className="rounded-2xl bg-paper p-6 sm:p-7">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-olive">
              <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
                <path d="M12 3l7 3.5v5c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5v-5L12 3z" {...stroke} />
                <path d="M9 12l2 2 4-4" {...stroke} />
              </svg>
              {dict.guaranteeTermsTitle}
            </h3>
            <ul>
              {terms.map((t, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3.5 py-3.5 text-[14px] leading-relaxed text-ink-soft ${i !== 0 ? "border-t border-sea/10" : ""}`}
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-olive/10 text-olive">
                    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
                      {termIcons[i]}
                    </svg>
                  </span>
                  <span className="pt-1.5">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// A round "guaranteed" seal: the label runs around the rim (slowly turning)
// with a shield and check in the middle.
function GuaranteeSeal({ label }: { label: string }) {
  const text = (label + label).toUpperCase();
  return (
    <div className="relative h-[124px] w-[124px] flex-none" aria-hidden="true">
      <svg viewBox="0 0 120 120" className="guarantee-spin absolute inset-0 h-full w-full text-olive">
        <defs>
          <path id="guarantee-rim" d="M60 60m-44 0a44 44 0 1188 0a44 44 0 11-88 0" />
        </defs>
        <circle cx="60" cy="60" r="58" className="fill-paper" stroke="currentColor" strokeWidth="2" />
        <circle cx="60" cy="60" r="38" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <text className="fill-current font-sans text-[12px] font-extrabold" letterSpacing="1.4">
          <textPath href="#guarantee-rim" textLength="272" lengthAdjust="spacingAndGlyphs">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-[32px] flex items-center justify-center rounded-full bg-olive text-paper shadow-[0_8px_20px_-8px_rgba(107,122,79,0.9)]">
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
          <path d="M12 3l7 3.5v5c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5v-5L12 3z" {...stroke} />
          <path d="M9 12l2 2 4-4" {...stroke} />
        </svg>
      </span>
    </div>
  );
}
