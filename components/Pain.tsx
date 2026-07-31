import type { Dictionary } from "../lib/dictionaries";

export default function Pain({ dict }: { dict: Dictionary }) {
  const items = [
    { title: dict.pain1Title, text: dict.pain1Text },
    { title: dict.pain2Title, text: dict.pain2Text },
    { title: dict.pain3Title, text: dict.pain3Text },
  ];

  return (
    <section className="px-6 py-16" id="problem">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-11 max-w-[640px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.painEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.painTitle}
          </h2>
        </div>
        {/* The payout breakdown every host already recognises from their own
            dashboard — it lands harder than a list of percentages. */}
        <div className="mb-8 grid items-center gap-8 rounded-xl2 border border-sea/10 bg-paper p-7 md:grid-cols-[1fr_0.85fr] md:p-9">
          <div>
            <div className="mb-5 text-sm font-bold text-ink-soft">{dict.painCalcTitle}</div>

            <div className="flex items-baseline justify-between border-b border-sea/10 pb-3.5">
              <span className="text-[15px] text-ink-soft">{dict.painCalcGuest}</span>
              <span className="font-display text-xl font-semibold text-sea">300€</span>
            </div>

            <div className="flex items-baseline justify-between border-b border-sea/10 py-3.5">
              <span className="text-[15px] text-roof">
                {dict.painCalcFee}{" "}
                <span className="text-[13px] text-ink-soft">({dict.painCalcFeeNote})</span>
              </span>
              <span className="font-display text-xl font-semibold text-roof">−45€</span>
            </div>

            <div className="flex items-baseline justify-between pt-3.5">
              <span className="text-[15px] font-semibold text-sea">{dict.painCalcYou}</span>
              <span className="font-display text-[32px] font-semibold text-sea">255€</span>
            </div>

            <div className="mt-5 flex h-2.5 overflow-hidden rounded-full bg-sand-deep" aria-hidden="true">
              <div className="bg-roof" style={{ width: "15%" }} />
              <div className="flex-1 bg-olive" />
            </div>
          </div>

          <div className="rounded-2xl bg-sand-deep/60 p-6">
            <div className="mb-3.5 text-xs font-bold uppercase tracking-wider text-ink-soft">
              {dict.painCalcPlatforms}
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-lg border border-sea/15 bg-paper px-3 py-1.5 text-sm font-bold text-sea">
                Booking.com
              </span>
              <span className="rounded-lg border border-sea/15 bg-paper px-3 py-1.5 text-sm font-bold text-sea">
                Airbnb
              </span>
            </div>
            <p className="text-[13.5px] leading-relaxed text-ink-soft">{dict.painCalcNote}</p>
          </div>
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
