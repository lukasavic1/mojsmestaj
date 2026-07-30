import type { Dictionary } from "../lib/dictionaries";

export default function Steps({ dict }: { dict: Dictionary }) {
  const steps = [
    { title: dict.step1Title, text: dict.step1Text },
    { title: dict.step2Title, text: dict.step2Text },
    { title: dict.step3Title, text: dict.step3Text },
  ];

  return (
    <section className="px-6 py-8" id="kako">
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-[28px] bg-sea px-6 py-12 text-paper sm:px-10 sm:py-14">
          <div className="mb-11 max-w-[640px]">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sun before:block before:h-[2px] before:w-[18px] before:bg-sun">
              {dict.stepsEyebrow}
            </div>
            <h2 className="font-display text-[26px] font-semibold leading-tight text-paper sm:text-[32px] lg:text-[38px]">
              {dict.stepsTitle}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i}>
                <div className="mb-3.5 flex items-center gap-2.5 font-display text-sm font-semibold text-sun before:block before:h-px before:w-8 before:bg-paper/35">
                  0{i + 1}
                </div>
                <h3 className="mb-2 text-[19px] font-semibold text-paper">{step.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-paper/75">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
