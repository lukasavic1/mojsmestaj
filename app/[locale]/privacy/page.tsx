import type { Metadata } from "next";
import { isLocale, defaultLocale, locales, type Locale } from "../../../lib/i18n-config";
import { getDictionary } from "../../../lib/dictionaries";
import { getPrivacyContent } from "../../../lib/privacy-content";
import { getContactLinks } from "../../../lib/links";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const content = getPrivacyContent(locale);
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return {
    title: `${content.title} | SvojSmeštaj`,
    alternates: { canonical: `${base}/${locale}/privacy` },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);
  const content = getPrivacyContent(locale);
  const links = getContactLinks(dict.waMsg, dict.emailSubject);

  // Fill contact/brand placeholders once so the content file stays generic.
  const fill = (text: string) =>
    text
      .replace(/\{brand\}/g, dict.brand)
      .replace(/\{email\}/g, links.email)
      .replace(/\{phone\}/g, links.phone);

  return (
    <>
      <Nav dict={dict} locale={locale} />
      <main className="px-6 py-14">
        <article className="mx-auto max-w-[760px]">
          <h1 className="font-display text-[30px] font-semibold leading-tight text-sea sm:text-[38px]">
            {content.title}
          </h1>
          <p className="mt-3 text-sm text-ink-soft">
            {content.updatedLabel}: {content.updatedDate}
          </p>

          <p className="mt-8 text-[15px] leading-relaxed text-ink-soft">{fill(content.intro)}</p>

          <div className="mt-8 rounded-xl2 border border-sea/10 bg-paper p-6">
            <h2 className="text-base font-semibold text-sea">{content.controllerHeading}</h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              {content.controllerIntro}
            </p>
            <ul className="mt-3 space-y-1 text-[14.5px] text-sea">
              <li>
                <span className="font-semibold">{dict.brand}</span>
              </li>
              <li>
                E-mail:{" "}
                <a href={links.emailHref} className="font-semibold hover:underline">
                  {links.email}
                </a>
              </li>
              <li>
                WhatsApp / tel:{" "}
                <a href={links.phoneHref} className="font-semibold hover:underline">
                  {links.phone}
                </a>
              </li>
            </ul>
          </div>

          {content.sections.map((section, i) => (
            <section key={i} className="mt-9">
              <h2 className="font-display text-[20px] font-semibold text-sea sm:text-[22px]">
                {section.heading}
              </h2>
              {section.blocks.map((block, j) =>
                "p" in block ? (
                  <p key={j} className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {fill(block.p)}
                  </p>
                ) : (
                  <ul key={j} className="mt-3 space-y-2 pl-1">
                    {block.list.map((item, k) => (
                      <li key={k} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-roof" />
                        <span>{fill(item)}</span>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </section>
          ))}
        </article>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
