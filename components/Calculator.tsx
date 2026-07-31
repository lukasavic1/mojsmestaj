"use client";

import { useState } from "react";
import type { Dictionary } from "../lib/dictionaries";

const COMMISSION_RATE = 0.15;
const MAX_NIGHTS_PER_MONTH = 31;

// Rendered on the server too, so it must not depend on the runtime's locale data.
function fmt(n: number) {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="py-4">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <label className="text-[15px] text-ink-soft">{label}</label>
        <span className="font-display text-xl font-semibold text-sea">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="calc-slider"
      />
    </div>
  );
}

export default function Calculator({ dict }: { dict: Dictionary }) {
  const [price, setPrice] = useState(55);
  const [nights, setNights] = useState(18);

  const monthlyRevenue = price * nights;
  // Round before multiplying, so the "149€ x 12" shown under the yearly figure
  // actually produces it. Multiplying the unrounded fee is off by a few euro.
  const monthlyFee = Math.round(monthlyRevenue * COMMISSION_RATE);
  const yearlyLost = monthlyFee * 12;

  return (
    <section className="px-6 py-16" id="izracun">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-11 max-w-[640px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.calcEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.calcTitle}
          </h2>
          <p className="mt-3.5 text-[15px] text-ink-soft">{dict.calcLede}</p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          <div className="flex flex-col rounded-xl2 border border-sea/10 bg-paper p-7 sm:p-9">
            <Slider
              label={dict.calcPricePerNight}
              value={price}
              min={15}
              max={250}
              step={5}
              suffix="€"
              onChange={setPrice}
            />
            <div className="border-t border-sea/10">
              <Slider
                label={dict.calcNightsOccupied}
                value={nights}
                min={1}
                max={MAX_NIGHTS_PER_MONTH}
                step={1}
                suffix=""
                onChange={setNights}
              />
            </div>

            <div className="mt-auto border-t border-sea/10 pt-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[14.5px] text-ink-soft">{dict.calcRevenue}</span>
                <span className="font-display text-lg font-semibold text-sea">
                  {fmt(monthlyRevenue)}€
                </span>
              </div>
              <div className="mt-2.5 flex items-baseline justify-between">
                <span className="text-[14.5px] text-roof">{dict.calcFeeMonthly}</span>
                <span className="font-display text-lg font-semibold text-roof">
                  −{fmt(monthlyFee)}€
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl2 bg-sea p-7 text-paper sm:p-9">
            <div className="text-sm font-bold uppercase tracking-wider text-sun">
              {dict.calcLostYear}
            </div>
            <div className="mt-2.5 font-display text-[52px] font-semibold leading-none text-paper sm:text-[64px]">
              {fmt(yearlyLost)}€
            </div>

            {/* Where the yearly figure comes from, in symbols rather than words
                so it reads the same in all four languages. */}
            <div className="mt-3.5 font-display text-lg text-paper/60">
              {fmt(monthlyFee)}€ × 12
            </div>

            <a
              href="#cene"
              className="mt-auto block rounded-full bg-roof px-6 py-4 text-center text-[15px] font-bold text-paper transition-colors hover:bg-roof-dark"
            >
              {dict.calcCta}
            </a>

            <p className="mt-5 text-[12.5px] leading-relaxed text-paper/60">{dict.calcNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
