import type { Dictionary } from "../lib/dictionaries";
import WhatsAppCta from "./WhatsAppCta";

const icons = {
  site: (
    <path
      d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm0 3h18M6.5 6.5h.01M9 6.5h.01"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </>
  ),
  guests: (
    <path
      d="M4 6h16v10H9l-4 4v-4H4V6zm4 4h8M8 13h5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Solution({ dict }: { dict: Dictionary }) {
  const pillars = [
    { icon: icons.site, title: dict.solution1Title, text: dict.solution1Text },
    { icon: icons.instagram, title: dict.solution2Title, text: dict.solution2Text },
    { icon: icons.guests, title: dict.solution3Title, text: dict.solution3Text },
  ];
  const process = [dict.process1, dict.process2, dict.process3, dict.process4];

  return (
    <section className="px-6 py-8" id="resenje">
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-[28px] bg-sea px-6 py-12 text-paper sm:px-10 sm:py-14">
          <div className="mb-11 max-w-[680px]">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sun before:block before:h-[2px] before:w-[18px] before:bg-sun">
              {dict.solutionEyebrow}
            </div>
            <h2 className="font-display text-[26px] font-semibold leading-tight text-paper sm:text-[32px] lg:text-[38px]">
              {dict.solutionTitle}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-paper/75">{dict.solutionLede}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={i}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-paper/10">
                  <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px] text-sun">
                    {p.icon}
                  </svg>
                </div>
                <h3 className="mb-2 text-[19px] font-semibold text-paper">{p.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-paper/75">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-11 border-t border-paper/15 pt-8">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-sun">
              {dict.processTitle}
            </h3>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-display text-sm font-semibold text-sun">0{i + 1}</span>
                  <span className="text-[14.5px] leading-snug text-paper/85">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <WhatsAppCta dict={dict} tone="dark" className="mt-10" />
        </div>
      </div>
    </section>
  );
}
