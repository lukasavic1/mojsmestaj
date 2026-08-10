import type { Dictionary } from "../lib/dictionaries";

export default function Pain({ dict }: { dict: Dictionary }) {
  const items = [
    { title: dict.pain1Title, text: dict.pain1Text },
    { title: dict.pain2Title, text: dict.pain2Text },
    { title: dict.pain3Title, text: dict.pain3Text },
  ];

  return (
    <section className="px-6 pb-16 pt-8 md:pt-16" id="problem">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-11 max-w-[640px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.painEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.painTitle}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-sea/10 bg-paper p-7">
              <h3 className="mb-2 text-lg font-semibold text-sea">{item.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
