import type { Dictionary } from "../lib/dictionaries";

export default function Value({ dict }: { dict: Dictionary }) {
  const items = [
    { title: dict.value1Title, text: dict.value1Text },
    { title: dict.value2Title, text: dict.value2Text },
    { title: dict.value3Title, text: dict.value3Text },
    { title: dict.value4Title, text: dict.value4Text },
  ];

  return (
    <section className="px-6 py-16" id="odrzavanje">
      <div className="mx-auto grid max-w-[1140px] items-center gap-11 md:grid-cols-2">
        <div>
          <div className="mb-7 max-w-[560px]">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
              {dict.valueEyebrow}
            </div>
            <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
              {dict.valueTitle}
            </h2>
          </div>
          <ul>
            {items.map((item, i) => (
              <li key={i} className={`flex gap-3.5 py-4 ${i !== 0 ? "border-t border-sea/10" : ""}`}>
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-sand-deep">
                  <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px] text-roof">
                    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-sea">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl2 bg-sea p-9 text-paper">
          <div className="mb-2.5 flex items-baseline gap-2.5">
            <span className="font-display text-[40px] font-semibold">15€</span>
            <span className="text-sm text-paper/70">{dict.valueCardPeriod}</span>
          </div>
          <p className="text-[14.5px] leading-relaxed text-paper/80">{dict.valueCardText}</p>
          <div className="mt-5 text-sm font-bold text-sun">{dict.valueCardQuip}</div>
        </div>
      </div>
    </section>
  );
}
