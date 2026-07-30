import type { Dictionary } from "../lib/dictionaries";

export default function Trust({ dict }: { dict: Dictionary }) {
  const items = [
    {
      title: dict.trust1Title,
      text: dict.trust1Text,
      icon: (
        <path d="M12 20c4-3 7-6.5 7-10.5A7 7 0 005 9.5C5 13.5 8 17 12 20z" stroke="currentColor" strokeWidth="1.8" />
      ),
    },
    {
      title: dict.trust2Title,
      text: dict.trust2Text,
      icon: (
        <path
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.4-4 8-9 8a10 10 0 01-3.5-.6L3 20l1.1-3.3A7.9 7.9 0 013 12c0-4.4 4-8 9-8s9 3.6 9 8z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: dict.trust3Title,
      text: dict.trust3Text,
      icon: (
        <path
          d="M4 20l4.5-1.2L20 7.3a2 2 0 000-2.8l-.5-.5a2 2 0 00-2.8 0L5.2 15.5 4 20z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
  ];

  return (
    <section className="px-6 py-16" id="zasto">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-11 max-w-[640px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.trustEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.trustTitle}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sand-deep">
                <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px] text-roof">
                  {item.icon}
                </svg>
              </div>
              <h3 className="mb-1.5 text-[17px] font-semibold text-sea">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
