"use client";

import { useState } from "react";
import type { Dictionary } from "../lib/dictionaries";

const COMMISSION_RATE = 0.15;
const SITE_PRICE = 499;
const MONTHLY_FEE = 15;

// A month only has so many nights to sell. Without this the sliders happily
// produce 20 bookings x 14 nights, and a revenue figure nobody would believe.
const MAX_NIGHTS_PER_MONTH = 31;

function fitsInMonth(value: number) {
  return Math.max(1, Math.floor(MAX_NIGHTS_PER_MONTH / value));
}

// Rendered on the server too, so it must not depend on the runtime's locale data.
function fmt(n: number) {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// 1 mesec / 2–4 meseca / 5+ meseci — getting this wrong reads as sloppy on a
// page selling professional work.
function pluralMonths(n: number, dict: Dictionary) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return dict.calcMonth1;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return dict.calcMonth2;
  return dict.calcMonth5;
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
  const [bookings, setBookings] = useState(6);
  const [nights, setNights] = useState(3);

  // Raising one of the two pushes the other down rather than letting the pair
  // describe a month that does not exist.
  function changeBookings(v: number) {
    setBookings(v);
    setNights((n) => Math.min(n, fitsInMonth(v)));
  }

  function changeNights(v: number) {
    setNights(v);
    setBookings((b) => Math.min(b, fitsInMonth(v)));
  }

  const nightsSold = bookings * nights;
  const monthlyRevenue = price * nightsSold;
  const monthlyFee = monthlyRevenue * COMMISSION_RATE;
  const yearlyLost = monthlyFee * 12;

  const firstYearCost = SITE_PRICE + MONTHLY_FEE * 12;
  const netFirstYear = yearlyLost - firstYearCost;

  // Once maintenance is covered, the one-off price is what is left to earn back.
  const monthlyGain = monthlyFee - MONTHLY_FEE;
  const paybackMonths = monthlyGain > 0 ? Math.ceil(SITE_PRICE / monthlyGain) : null;

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
                label={dict.calcBookings}
                value={bookings}
                min={1}
                max={MAX_NIGHTS_PER_MONTH}
                step={1}
                suffix=""
                onChange={changeBookings}
              />
            </div>
            <div className="border-t border-sea/10">
              <Slider
                label={dict.calcNights}
                value={nights}
                min={1}
                max={MAX_NIGHTS_PER_MONTH}
                step={1}
                suffix=""
                onChange={changeNights}
              />
            </div>

            <div className="mt-auto border-t border-sea/10 pt-5">
              <div className="mb-2.5 flex items-baseline justify-between">
                <span className="text-[14.5px] text-ink-soft">{dict.calcNightsTotal}</span>
                <span className="text-[14.5px] font-semibold text-ink-soft">
                  {nightsSold}/{MAX_NIGHTS_PER_MONTH}
                </span>
              </div>
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

            {paybackMonths !== null && (
              <div className="mt-7 rounded-xl bg-paper/10 p-4">
                <div className="text-[13.5px] text-paper/75">{dict.calcPayback}</div>
                <div className="mt-1 font-display text-2xl font-semibold text-sun">
                  {paybackMonths} {pluralMonths(paybackMonths, dict)}
                </div>
              </div>
            )}

            <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-paper/15 pt-4 text-[14px]">
              <span className="text-paper/70">{dict.calcSiteCost}</span>
              <span className="whitespace-nowrap font-semibold text-paper/85">
                −{fmt(firstYearCost)}€
              </span>
            </div>

            {netFirstYear > 0 && (
              <div className="mt-3.5 flex items-baseline justify-between gap-4">
                <span className="text-[14.5px] font-semibold text-paper">{dict.calcNet}</span>
                <span className="whitespace-nowrap font-display text-[28px] font-semibold text-sun">
                  +{fmt(netFirstYear)}€
                </span>
              </div>
            )}

            <a
              href="#cene"
              className="mt-7 block rounded-full bg-roof px-6 py-4 text-center text-[15px] font-bold text-paper transition-colors hover:bg-roof-dark"
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
