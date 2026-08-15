"use client";

import { useMemo, useState } from "react";
import type { Dictionary } from "../../lib/dictionaries";
import { Lightbox, Photo } from "./Photo";
import {
  IconArea,
  IconBed,
  IconCalendar,
  IconChevron,
  IconInstagram,
  IconMail,
  IconMapPin,
  IconPhone,
  IconTv,
  IconUsers,
  IconWasher,
  IconWifi,
  Stars,
} from "./icons";
import {
  AspectMedia,
  Avatar,
  Container,
  InquiryForm,
  Section,
  SectionHead,
  SiteNav,
  ScrollX,
  SnapCard,
  SnapRow,
  scrollToId,
} from "./layout-kit";
import { AVATARS, URBAN, nightsBetween } from "./photos";
import { useViewport } from "./viewport";

const UNITS = [
  {
    name: "Studio loft",
    area: "32 m²",
    bedKey: "queen" as const,
    floor: "3. sprat",
    view: "Ulica Cara Uroša",
    price: 120,
    guests: 2,
    img: 1,
    perks: ["500 Mb/s Wi‑Fi", "Nespresso", "Smart TV", "Samostalan prijem"],
  },
  {
    name: "Suite apartman",
    area: "48 m²",
    bedKey: "king" as const,
    floor: "6. sprat",
    view: "Krovovi Starog grada",
    price: 165,
    guests: 4,
    img: 3,
    perks: ["1 Gb/s Wi‑Fi", "Radna soba", "Mašina za veš", "Balkon 8 m²"],
  },
];

export default function UrbanTemplate({ dict }: { dict: Dictionary }) {
  const vp = useViewport();
  const mobile = vp === "mobile";
  const desktop = vp === "desktop";
  const [open, setOpen] = useState<number | null>(null);
  const [unit, setUnit] = useState(0);
  const [checkIn, setCheckIn] = useState("2026-08-18");
  const [checkOut, setCheckOut] = useState("2026-08-21");
  const [guests, setGuests] = useState(2);
  const [picked, setPicked] = useState<number[]>([18, 19, 20]);
  const [step, setStep] = useState(1);

  const bedLabel = (key: "queen" | "king") => (key === "king" ? dict.tplDemoKing : dict.tplDemoQueen);
  const active = UNITS[unit];
  const nights = nightsBetween(checkIn, checkOut);
  const direct = active.price * nights;
  const otaPrice = Math.round(direct * 1.15);
  const booked = [4, 5, 12, 13, 25, 26];
  const days = useMemo(() => Array.from({ length: 31 }, (_, i) => i + 1), []);
  const strip = useMemo(() => Array.from({ length: 14 }, (_, i) => 16 + i), []);

  const nav = [
    [dict.tplDemoUnits, "urb-units"],
    [dict.tplDemoCalendar, "urb-calendar"],
    [dict.tplDemoGallery, "urb-gallery"],
    [dict.tplDemoLocation, "urb-location"],
    [dict.tplDemoTotal, "urb-checkout"],
  ] as const;

  const distances = [
    { label: "Metro Vukov spomenik", time: "2 min", tag: "peške" },
    { label: "Glavni trg / Knez Mihailova", time: "5 min", tag: "peške" },
    { label: "Aerodrom Nikola Tesla", time: "20 min", tag: "taksi" },
    { label: "Železnička stanica Prokop", time: "9 min", tag: "tramvaj" },
  ];

  const specRows = [
    { key: dict.tplDemoOverview, get: (u: typeof active) => u.area, Icon: IconArea },
    { key: dict.tplDemoBeds, get: (u: typeof active) => bedLabel(u.bedKey), Icon: IconBed },
    { key: "Sprat", get: (u: typeof active) => u.floor, Icon: IconMapPin },
    { key: dict.tplAmView, get: (u: typeof active) => u.view, Icon: IconWifi },
    { key: dict.tplDemoGuests, get: (u: typeof active) => `${u.guests}`, Icon: IconUsers },
  ];

  const unitCard = (item: (typeof UNITS)[number], index: number) => (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-slate-800/40 transition-all duration-300 vp-d:hover:-translate-y-1 ${
        index === unit ? "border-blue-500 ring-1 ring-blue-500/40" : "border-white/10"
      }`}
    >
      <AspectMedia src={URBAN.photos[item.img].thumb} alt={item.name} ratio="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-5 vp-d:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight">{item.name}</h3>
          <div className="shrink-0 text-right">
            <div className="text-xl font-bold text-blue-400">{item.price}€</div>
            <div className="text-[10px] uppercase tracking-wide text-slate-400">{dict.tplDemoPerNight}</div>
          </div>
        </div>
        <dl className="mt-4 space-y-2 text-sm">
          {specRows.map((row) => (
            <div key={row.key} className="flex items-center justify-between gap-3 border-b border-white/5 pb-2">
              <dt className="text-slate-400">{row.key}</dt>
              <dd className="font-semibold">{row.get(item)}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-4 flex flex-1 flex-wrap content-start gap-1.5">
          {item.perks.map((perk) => (
            <li key={perk} className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300">
              {perk}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            setUnit(index);
            scrollToId("urb-checkout");
          }}
          className="mt-5 flex min-h-12 w-full shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white transition-colors hover:bg-blue-500"
        >
          {dict.tplDemoReserve}
        </button>
      </div>
    </article>
  );

  const priceBreakdown = (
    <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-5 vp-d:p-6">
      <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">{dict.tplDemoTotal}</h3>
      <ul className="mt-4 space-y-3 text-sm">
        <li className="flex justify-between">
          <span className="text-slate-400">
            {active.price}€ × {nights} {dict.tplDemoNights}
          </span>
          <span className="font-semibold">{direct}€</span>
        </li>
        <li className="flex justify-between">
          <span className="text-slate-400">Čišćenje</span>
          <span className="font-semibold">25€</span>
        </li>
        <li className="flex justify-between text-slate-500">
          <span>Provizija platforme</span>
          <span className="line-through">{otaPrice - direct}€</span>
        </li>
        <li className="flex items-center justify-between border-t border-white/10 pt-3 text-base">
          <span className="font-bold">{dict.tplDemoDirect}</span>
          <span className="text-2xl font-bold text-blue-400">{direct + 25}€</span>
        </li>
      </ul>
      <p className="mt-3 rounded-lg bg-blue-600/10 px-3 py-2 text-[11px] font-semibold text-blue-300">
        Ušteda {otaPrice - direct}€ u odnosu na Airbnb / Booking.com
      </p>
    </div>
  );

  return (
    <div className="overflow-x-clip bg-slate-900 font-sans text-slate-100">
      {desktop ? (
        <div className="bg-blue-600">
          <Container className="flex items-center justify-between gap-4 py-2.5">
            <p className="text-sm font-bold tracking-tight">Rezervišite direktno i uštedite 15% u odnosu na Airbnb / Booking.com</p>
            <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
              {dict.tplDemoDirect} {active.price}€ · Airbnb {Math.round(active.price * 1.15)}€
            </span>
          </Container>
        </div>
      ) : (
        <div className="sticky top-0 z-40 bg-blue-600">
          <Container className="flex items-center justify-between gap-3 py-2">
            <p className="min-w-0 truncate text-[12px] font-bold">
              {dict.tplDemoDirect}: {active.price}€ / {dict.tplDemoPerNight}
            </p>
            <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase">{dict.tplDemoBestPrice}</span>
          </Container>
        </div>
      )}

      <SiteNav
        brand={
          <div className="flex min-w-0 items-center gap-2">
            <span className="truncate text-[14px] font-black tracking-tight">METRO LOFT</span>
            <span className="rounded bg-blue-600 px-1.5 py-0.5 text-[9px] font-black uppercase">{dict.tplDemoDirect}</span>
          </div>
        }
        links={nav}
        ctaLabel={dict.tplDemoInstant}
        onCta={() => scrollToId("urb-checkout")}
        menuLabel={dict.tplDemoMenu}
        closeLabel={dict.tplClose}
        barClass="border-b border-white/10 bg-slate-900/90 backdrop-blur-md"
        linkClass="font-semibold text-slate-400 hover:text-blue-400"
        ctaClass="rounded-xl bg-blue-600 text-[12px] font-bold text-white"
        drawerClass="bg-slate-900 text-slate-100"
      />

      <section className="py-8 vp-t:py-10 vp-d:py-14">
        <Container>
          <div className="grid grid-cols-1 gap-8 vp-d:grid-cols-[1.05fr_0.95fr] vp-d:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-600/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-300">
                <IconMapPin className="h-3.5 w-3.5" /> Stari Grad · 4.97
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight vp-t:text-4xl vp-d:text-5xl">
                Plati sajtu. Preskoči proviziju.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 vp-d:text-base">{dict.tplUrbanAbout}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 vp-dt:grid-cols-4">
                {[
                  { Icon: IconWifi, label: "1 Gb/s" },
                  { Icon: IconTv, label: dict.tplAmTv },
                  { Icon: IconWasher, label: dict.tplAmWasher },
                  { Icon: IconMapPin, label: "Metro 2 min" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                    <item.Icon className="h-4 w-4 shrink-0 text-blue-400" />
                    <span className="truncate text-xs font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative max-h-[420px] overflow-hidden rounded-2xl vp-d:max-h-[450px]">
              <AspectMedia src={URBAN.hero} alt="Metro Loft" ratio="aspect-[4/3] max-h-[420px] vp-d:max-h-[450px]" eager />
            </div>
          </div>
        </Container>
      </section>

      <Section id="urb-units" className="border-t border-white/5 bg-slate-950/40">
        <SectionHead
          eyebrow={dict.tplDemoUnits}
          title="Uporedi dve jedinice"
          lead="Iste kućne procedure, ista adresa. Razlika je u kvadraturi, spratu i pogledu."
          eyebrowClass="text-blue-400"
          leadClass="text-slate-400"
        />

        {desktop ? (
          <div className="mt-8 grid grid-cols-2 gap-6">{UNITS.map((item, i) => <div key={item.name} className="h-full">{unitCard(item, i)}</div>)}</div>
        ) : (
          <>
            <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-white/5 p-1">
              {UNITS.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setUnit(i)}
                  className={`min-h-12 rounded-lg px-3 text-[12px] font-bold transition-colors ${
                    unit === i ? "bg-blue-600 text-white" : "text-slate-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-4">{unitCard(active, unit)}</div>
          </>
        )}
      </Section>

      <Section id="urb-calendar" className="border-t border-white/5">
        <SectionHead
          eyebrow={dict.tplDemoAvailable}
          title={dict.tplDemoCalendar}
          lead="Zeleno je slobodno. Klikni datume i cena se odmah preračunava."
          eyebrowClass="text-blue-400"
          leadClass="text-slate-400"
        />
        <div className="mt-8 grid grid-cols-1 gap-6 vp-d:grid-cols-[1fr_320px]">
          <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-5 vp-d:p-6">
            <div className="flex items-center justify-between">
              <h3 className="inline-flex items-center gap-2 text-sm font-bold">
                <IconCalendar className="h-4 w-4 text-blue-400" /> Avgust 2026
              </h3>
              <span className="text-[11px] text-slate-400">
                {picked.length} {dict.tplDemoNights}
              </span>
            </div>

            {desktop ? (
              <div className="mt-4 grid grid-cols-7 gap-1.5">
                {days.map((day) => {
                  const isBooked = booked.includes(day);
                  const isPicked = picked.includes(day);
                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={isBooked}
                      onClick={() => setPicked((c) => (c.includes(day) ? c.filter((d) => d !== day) : [...c, day].sort((a, b) => a - b)))}
                      className={`flex min-h-12 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                        isBooked
                          ? "bg-white/[0.03] text-slate-600 line-through"
                          : isPicked
                            ? "bg-blue-600 text-white"
                            : "bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            ) : (
              <>
                <ScrollX className="mt-4 gap-2 pb-2">
                  {strip.map((day) => {
                    const isBooked = booked.includes(day);
                    const isPicked = picked.includes(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        disabled={isBooked}
                        onClick={() => setPicked((c) => (c.includes(day) ? c.filter((d) => d !== day) : [...c, day].sort((a, b) => a - b)))}
                        className={`flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                          isBooked
                            ? "bg-white/[0.03] text-slate-600 line-through"
                            : isPicked
                              ? "bg-blue-600 text-white"
                              : "bg-emerald-500/10 text-emerald-300"
                        }`}
                      >
                        <span className="text-[10px] font-medium uppercase opacity-70">avg</span>
                        {day}
                      </button>
                    );
                  })}
                </ScrollX>
                <button
                  type="button"
                  onClick={() => scrollToId("urb-checkout")}
                  className="mt-2 min-h-12 w-full rounded-xl bg-blue-600 text-sm font-bold text-white"
                >
                  Izaberi datum dolaska
                </button>
              </>
            )}
          </div>

          <div className="grid gap-3">
            <label className="rounded-xl border border-white/10 bg-white/5 p-3 text-[10px] font-bold uppercase tracking-wide text-slate-400">
              {dict.tplDemoCheckIn}
              <input
                type="date"
                value={checkIn}
                onChange={(event) => setCheckIn(event.target.value)}
                className="mt-1 min-h-12 w-full bg-transparent text-sm font-bold text-white outline-none"
              />
            </label>
            <label className="rounded-xl border border-white/10 bg-white/5 p-3 text-[10px] font-bold uppercase tracking-wide text-slate-400">
              {dict.tplDemoCheckOut}
              <input
                type="date"
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
                className="mt-1 min-h-12 w-full bg-transparent text-sm font-bold text-white outline-none"
              />
            </label>
            <div className="flex min-h-12 items-center justify-between rounded-xl border border-blue-500/30 bg-blue-600/10 px-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-300">
                <IconUsers className="h-4 w-4 text-blue-400" /> {dict.tplDemoGuests}
              </span>
              <span className="flex items-center gap-3">
                <button type="button" className="min-h-12 min-w-12 text-lg" onClick={() => setGuests((g) => Math.max(1, g - 1))}>
                  −
                </button>
                <span className="font-bold">{guests}</span>
                <button type="button" className="min-h-12 min-w-12 text-lg" onClick={() => setGuests((g) => Math.min(4, g + 1))}>
                  +
                </button>
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section id="urb-gallery" className="border-t border-white/5 bg-slate-950/40">
        <SectionHead eyebrow={dict.tplDemoGallery} title="Stan iznutra" eyebrowClass="text-blue-400" />
        {mobile ? (
          <SnapRow className="mt-6">
            {URBAN.photos.slice(0, 6).map((photo, i) => (
              <SnapCard key={photo.src} className="overflow-hidden rounded-2xl">
                <AspectMedia src={photo.thumb} alt={photo.alt} ratio="aspect-[4/3]" onClick={() => setOpen(i)} />
              </SnapCard>
            ))}
          </SnapRow>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 vp-d:grid-cols-3">
            {URBAN.photos.slice(0, 6).map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setOpen(i)}
                className="overflow-hidden rounded-2xl transition-all duration-300 vp-d:hover:-translate-y-1"
              >
                <AspectMedia src={photo.thumb} alt={photo.alt} ratio="aspect-[4/3]" />
              </button>
            ))}
          </div>
        )}
      </Section>

      <Section id="urb-location" className="border-t border-white/5">
        <SectionHead eyebrow={dict.tplDemoLocation} title="Cara Uroša 12, Stari Grad" eyebrowClass="text-blue-400" />
        <div className="mt-8 grid grid-cols-1 gap-6 vp-d:grid-cols-2">
          <ul className="grid gap-3">
            {distances.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-slate-800/40 px-4 py-4">
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{item.label}</span>
                  <span className="text-[11px] uppercase tracking-wide text-slate-500">{item.tag}</span>
                </span>
                <span className="shrink-0 rounded-lg bg-blue-600/15 px-3 py-1.5 text-sm font-bold text-blue-300">{item.time}</span>
              </li>
            ))}
          </ul>
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-white/10">
            <Photo src={URBAN.photos[6].thumb} alt="Beograd" />
            <div className="absolute inset-0 bg-slate-900/60" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(59,130,246,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.35)_1px,transparent_1px)] [background-size:32px_32px]" />
            <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 ring-8 ring-blue-500/25" />
            <p className="absolute bottom-4 left-4 rounded-lg bg-slate-900/85 px-3 py-1.5 text-xs font-bold">Metro Loft · Stari Grad</p>
          </div>
        </div>
      </Section>

      <Section id="urb-reviews" className="border-t border-white/5 bg-slate-950/40">
        <SectionHead eyebrow={dict.tplDemoReviews} title="Ocene gostiju" eyebrowClass="text-blue-400" />
        <div className="mt-8 grid grid-cols-1 gap-4 vp-t:grid-cols-2 vp-d:grid-cols-3">
          {[
            { name: "Marko D.", date: "avg 2026", text: dict.tplUrbanReview, avatar: AVATARS[3] },
            { name: "Lisa P.", date: "jul 2026", text: "Prijavili smo se kodom i platili cenu sa sajta. Metro je bukvalno u prizemlju.", avatar: AVATARS[2] },
            { name: "Ana T.", date: "jun 2026", text: "Čisto, brz Wi‑Fi, nula skrivenih troškova. Tako treba da izgleda direktna rezervacija.", avatar: AVATARS[0] },
          ].map((item) => (
            <article key={item.name} className="rounded-2xl border border-white/10 bg-slate-800/40 p-5 vp-d:p-6">
              <div className="flex items-center gap-3">
                <Avatar src={item.avatar} alt={item.name} size="h-12 w-12" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-bold">{item.name}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-blue-400">{dict.tplDemoVerified}</div>
                </div>
              </div>
              <div className="mt-3 text-blue-400">
                <Stars rating={5} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">“{item.text}”</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="urb-checkout" className="border-t border-white/5">
        <SectionHead
          eyebrow={dict.tplDemoDirect}
          title="Direktna rezervacija"
          lead="Bez naloga, bez provizije. Potvrda dolazi na mejl u roku od pet minuta."
          eyebrowClass="text-blue-400"
          leadClass="text-slate-400"
        />

        {desktop ? (
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">{active.name}</h3>
                <p className="mt-3 text-sm text-slate-300">
                  {checkIn} → {checkOut} · {guests} {dict.tplDemoGuests}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {active.area} · {bedLabel(active.bedKey)} · {active.floor}
                </p>
              </div>
              {priceBreakdown}
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">{dict.tplDemoInquiry}</h3>
              <div className="mt-4">
                <InquiryForm
                  dict={dict}
                  accentClass="text-blue-400"
                  inputClass="rounded-xl border border-white/10 bg-slate-900 text-sm outline-none focus:border-blue-500"
                  buttonClass="rounded-xl bg-blue-600 text-sm font-bold text-white"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-3">
            {[
              { id: 1, title: `1. ${dict.tplDemoCheckIn} / ${dict.tplDemoCheckOut}` },
              { id: 2, title: `2. ${dict.tplDemoName}` },
              { id: 3, title: `3. ${dict.tplDemoTotal}` },
            ].map((item) => (
              <div key={item.id} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/40">
                <button
                  type="button"
                  onClick={() => setStep(step === item.id ? 0 : item.id)}
                  className="flex min-h-12 w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-bold"
                >
                  {item.title}
                  <IconChevron className={`h-4 w-4 shrink-0 text-blue-400 transition-transform ${step === item.id ? "rotate-90" : ""}`} />
                </button>
                {step === item.id && (
                  <div className="border-t border-white/10 p-5">
                    {item.id === 1 && (
                      <div className="grid gap-3">
                        <label className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                          {dict.tplDemoCheckIn}
                          <input
                            type="date"
                            value={checkIn}
                            onChange={(event) => setCheckIn(event.target.value)}
                            className="mt-1 min-h-12 w-full rounded-xl border border-white/10 bg-slate-900 px-4 text-sm font-bold outline-none"
                          />
                        </label>
                        <label className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                          {dict.tplDemoCheckOut}
                          <input
                            type="date"
                            value={checkOut}
                            onChange={(event) => setCheckOut(event.target.value)}
                            className="mt-1 min-h-12 w-full rounded-xl border border-white/10 bg-slate-900 px-4 text-sm font-bold outline-none"
                          />
                        </label>
                        <button type="button" onClick={() => setStep(2)} className="min-h-12 rounded-xl bg-blue-600 text-sm font-bold text-white">
                          Dalje
                        </button>
                      </div>
                    )}
                    {item.id === 2 && (
                      <InquiryForm
                        dict={dict}
                        accentClass="text-blue-400"
                        inputClass="rounded-xl border border-white/10 bg-slate-900 text-sm outline-none"
                        buttonClass="rounded-xl bg-blue-600 text-sm font-bold text-white"
                      />
                    )}
                    {item.id === 3 && priceBreakdown}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Section>

      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="grid grid-cols-1 gap-6 vp-dt:grid-cols-3">
            <div>
              <div className="font-black tracking-tight">METRO LOFT</div>
              <p className="mt-3 text-sm text-slate-400">Cara Uroša 12, Beograd</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-400">
                <IconPhone className="h-4 w-4" /> +381 11 000 000
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-wide text-blue-400">{dict.tplDemoPolicies}</h3>
              <p className="mt-3 text-sm text-slate-400">
                {dict.tplDemoCheckIn} 15:00 · {dict.tplDemoCheckOut} 10:00
              </p>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                <IconMail className="h-4 w-4" /> stay@metroloft.rs
              </span>
              <div className="mt-3 text-slate-400">
                <IconInstagram className="h-5 w-5" />
              </div>
              <p className="mt-6 text-[11px] text-slate-600">© 2026 Metro Loft</p>
            </div>
          </div>
        </Container>
      </footer>

      {open !== null && (
        <Lightbox
          photos={URBAN.photos.slice(0, 6)}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((i) => (i === null ? 0 : (i + 5) % 6))}
          onNext={() => setOpen((i) => (i === null ? 0 : (i + 1) % 6))}
          closeLabel={dict.tplClose}
        />
      )}
    </div>
  );
}
