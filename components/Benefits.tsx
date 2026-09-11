import type { Dictionary } from "../lib/dictionaries";
import { BrandTile } from "./brand/PlatformMarks";

// Icons kept simple and consistent with the rest of the site (line style).
const icons = {
  chat: (
    <path
      d="M4 6h16v10H9l-4 4v-4H4V6z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  scale: (
    <path
      d="M12 4v16M6 8l-3 6h6l-3-6zm12 0l-3 6h6l-3-6zM5 20h14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  badge: (
    <path
      d="M12 3l2.3 1.7 2.8-.3 1 2.7 2.4 1.5-1 2.7 1 2.7-2.4 1.5-1 2.7-2.8-.3L12 21l-2.3-1.7-2.8.3-1-2.7L3.5 15.4l1-2.7-1-2.7 2.4-1.5 1-2.7 2.8.3L12 3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
  layers: (
    <path
      d="M12 4l8 4-8 4-8-4 8-4zm-8 8l8 4 8-4M4 16l8 4 8-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Benefits({ dict }: { dict: Dictionary }) {
  return (
    <section className="px-6 py-16" id="resenje">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-11 max-w-[720px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive before:block before:h-[2px] before:w-[18px] before:bg-olive">
            {dict.benefitsEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[40px]">
            {dict.benefitsTitle}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{dict.benefitsLede}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* 1 - Direct inquiries */}
          <Card icon={icons.chat} title={dict.benefit1Title} text={dict.benefit1Text} />

          {/* 2 - Less dependence: highlighted card with the platform marks */}
          <div className="flex flex-col rounded-2xl border border-sea/10 bg-sea p-7 text-paper sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <BrandTile platform="booking" className="h-9 w-9" />
              <BrandTile platform="airbnb" className="h-9 w-9" />
            </div>
            <h3 className="mb-1.5 text-[17px] font-semibold text-paper">{dict.benefit2Title}</h3>
            <p className="text-sm leading-relaxed text-paper/80">{dict.benefit2Text}</p>
          </div>

          <Card icon={icons.badge} title={dict.benefit3Title} text={dict.benefit3Text} />
          <Card icon={icons.scale} title={dict.benefit4Title} text={dict.benefit4Text} />
          <Card icon={icons.layers} title={dict.benefit5Title} text={dict.benefit5Text} />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-roof px-6 py-4 text-[15px] font-bold text-paper shadow-[0_8px_20px_-8px_rgba(181,85,42,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-roof-dark"
          >
            {dict.ctaMain}
          </a>
          <p className="max-w-[420px] text-[13px] leading-relaxed text-ink-soft">
            {dict.benefitsCommissionNote}
          </p>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-sea/10 bg-paper p-7">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sand-deep">
        <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px] text-roof">
          {icon}
        </svg>
      </div>
      <h3 className="mb-1.5 text-[17px] font-semibold text-sea">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
    </div>
  );
}
