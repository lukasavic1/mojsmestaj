import { ImageResponse } from "next/og";
import { isLocale, defaultLocale, locales, type Locale } from "../../lib/i18n-config";
import { getDictionary } from "../../lib/dictionaries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "SvojSmeštaj";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F2E8D5",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
            <path d="M3 11.5L12 4l9 7.5" stroke="#1B3A4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.5 10v9a1 1 0 001 1h11a1 1 0 001-1v-9" stroke="#1B3A4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 20v-5h4v5" stroke="#B5552A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 700, color: "#1B3A4B" }}>{dict.brand}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: 18,
              rowGap: 4,
              fontSize: 68,
              fontWeight: 700,
              color: "#1B3A4B",
              lineHeight: 1.1,
            }}
          >
            <span>{dict.heroTitleA}</span>
            <span style={{ color: "#B5552A" }}>{dict.heroTitleAccent}</span>
            <span>{dict.heroTitleB}</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#4A5A64", maxWidth: 900 }}>
            {dict.heroBadge}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              background: "#B5552A",
              color: "#FCFAF5",
              fontSize: 26,
              fontWeight: 700,
              padding: "14px 32px",
              borderRadius: 999,
            }}
          >
            499€ / 699€
          </div>
          <div style={{ fontSize: 26, color: "#4A5A64" }}>{`+ 12€ ${dict.valueCardPeriod}`}</div>
        </div>
      </div>
    ),
    size
  );
}
