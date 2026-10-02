import type { Dictionary } from "../lib/dictionaries";

const icons = {
  eye: (
    <>
      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M10.6 5.1A9.6 9.6 0 0112 5c5 0 8.5 4.5 9.5 7-.4 1-1.2 2.3-2.4 3.5M6.3 6.6C4.4 8 3.1 10 2.5 12c1 2.5 4.5 7 9.5 7 1.7 0 3.2-.5 4.5-1.3M9.9 9.9a3 3 0 004.2 4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  percent: (
    <path
      d="M19 5L5 19M7.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  user: (
    <path
      d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8c.8-3.4 3.6-5.5 7-5.5 1.3 0 2.5.3 3.5.8M17 17l4 4m0-4l-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Pain({ dict }: { dict: Dictionary }) {
  const points = [
    { icon: icons.eye, title: dict.problem1Title, text: dict.problem1Text },
    { icon: icons.percent, title: dict.problem2Title, text: dict.problem2Text },
    { icon: icons.user, title: dict.problem3Title, text: dict.problem3Text },
  ];

  return (
    <section className="px-6 pb-4 pt-8 md:pt-16" id="problem">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-11 max-w-[720px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.problemEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.problemTitle}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{dict.problemLede}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {points.map((p, i) => (
            <div key={i} className="rounded-2xl border border-sea/10 bg-paper p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-roof/10">
                <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px] text-roof">
                  {p.icon}
                </svg>
              </div>
              <h3 className="mb-1.5 text-[17px] font-semibold text-sea">{p.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
