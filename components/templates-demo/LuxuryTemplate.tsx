"use client";

import { useState } from "react";
import type { Dictionary } from "../../lib/dictionaries";
import { Lightbox, Photo } from "./Photo";
import {
  IconArea,
  IconChef,
  IconChevron,
  IconInstagram,
  IconMail,
  IconPhone,
  IconPool,
  IconUsers,
  IconWhatsApp,
  Stars,
} from "./icons";
import {
  AspectMedia,
  Avatar,
  Container,
  FramedMedia,
  InquiryForm,
  Section,
  SectionHead,
  SiteNav,
  SnapCard,
  SnapCarousel,
  SnapRow,
  scrollToId,
} from "./layout-kit";
import { AVATARS, LUXURY } from "./photos";
import { useViewport } from "./viewport";

const NAVY = "#1B365D";
const CHAMPAGNE = "#E8DFD8";

export default function LuxuryTemplate({ dict }: { dict: Dictionary }) {
  const vp = useViewport();
  const mobile = vp === "mobile";
  const desktop = vp === "desktop";
  const [open, setOpen] = useState<number | null>(null);
  const [service, setService] = useState<number | null>(0);
  const [guests, setGuests] = useState(4);
  const [bookOpen, setBookOpen] = useState(false);

  const nav = [
    [dict.tplDemoUnits, "lux-suites"],
    [dict.tplDemoAmenities, "lux-concierge"],
    [dict.tplDemoGallery, "lux-gallery"],
    [dict.tplDemoLocation, "lux-location"],
    [dict.tplDemoReviews, "lux-reviews"],
  ] as const;

  const specs = [
    { Icon: IconArea, value: "420 m²", label: dict.tplDemoOverview },
    { Icon: IconPool, value: "18 m", label: dict.tplAmPool },
    { Icon: IconUsers, value: "8", label: dict.tplDemoSleeps },
    { Icon: IconChef, value: "Kuvar", label: "Na poziv" },
  ];

  const features = [
    "Infinity bazen od 18 m sa pogledom na Boku",
    "Privatni kuvar i somelijer na poziv",
    "Kamena terasa od 120 m² i spoljna trpezarija",
    "Transfer sa aerodroma u Mercedes S klasi",
  ];

  const suites = [
    {
      name: "Glavni apartman",
      img: LUXURY.photos[5].thumb,
      price: 850,
      area: "68 m²",
      bed: dict.tplDemoKing,
      guests: 2,
      text: "Mermer, laneni draperi i privatna terasa okrenuta zalasku.",
    },
    {
      name: "Apartman uz bazen",
      img: LUXURY.photos[6].thumb,
      price: 720,
      area: "54 m²",
      bed: dict.tplDemoQueen,
      guests: 3,
      text: "Direktan izlaz na infinity ivicu, jutarnje plivanje bez publike.",
    },
    {
      name: "Soba uz baštu",
      img: LUXURY.photos[3].thumb,
      price: 540,
      area: "36 m²",
      bed: dict.tplDemoQueen,
      guests: 2,
      text: "Tiha soba uz maslinjak i kupatilo klesano u kamenu.",
    },
  ];

  const concierge = [
    { title: "Privatni kuvar", text: "Degustacioni meni od pet sekvenci, namirnice sa pijace u Tivtu, posluženje na terasi." },
    { title: "Čarter jahte", text: "Skiper i jahta od 14 m za dnevni obilazak Mamule i Plave špilje." },
    { title: "Spa u vili", text: "Masaža u paviljonu uz bazen, sauna i tretmani sa maslinovim uljem." },
    { title: "Transfer sa aerodroma", text: "Dolazak iz Tivta za 18 minuta, dočekivanje uz ime na tabli i hladan peškir." },
  ];

  const editorial = [LUXURY.photos[1], LUXURY.photos[9], LUXURY.photos[10]];

  const reviews = [
    { name: "Mila K.", date: "jul 2026", text: dict.tplLuxuryReview, avatar: AVATARS[0] },
    { name: "Thomas B.", date: "jun 2026", text: "Svetlost, bazen, tišina. Otkazali smo večere u gradu samo da ostanemo u vili.", avatar: AVATARS[1] },
    { name: "Ivana R.", date: "maj 2026", text: "Hotelski nivo, a osećaj kuće. Transfer, kuvar i spa — sve je bilo spremno pre nas.", avatar: AVATARS[2] },
  ];

  const reviewCard = (item: (typeof reviews)[number]) => (
    <article className="h-full rounded-2xl border p-5 vp-d:p-6" style={{ borderColor: CHAMPAGNE, backgroundColor: "#fff" }}>
      <div className="text-[#1B365D]">
        <Stars rating={5} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#4A5560]">“{item.text}”</p>
      <div className="mt-5 flex items-center gap-3">
        <Avatar src={item.avatar} alt={item.name} size="h-12 w-12" />
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{item.name}</div>
          <div className="text-[11px] text-[#8A8F96]">{item.date}</div>
        </div>
      </div>
    </article>
  );

  return (
    <div className="overflow-x-clip bg-[#FBF9F5] font-sans text-[#1C2024]">
      <SiteNav
        brand={<div className="font-display text-[13px] tracking-[0.32em] text-[#1B365D]">AURORA</div>}
        links={nav}
        ctaLabel="Rezerviši vilu"
        onCta={() => (mobile ? setBookOpen(true) : scrollToId("lux-book"))}
        menuLabel={dict.tplDemoMenu}
        closeLabel={dict.tplClose}
        barClass="border-b border-[#E8DFD8] bg-[#FBF9F5]/90 backdrop-blur-md"
        linkClass="uppercase tracking-[0.14em] text-[#1B365D]/70 hover:text-[#1B365D]"
        ctaClass="rounded-full bg-[#1B365D] text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
        drawerClass="bg-[#FBF9F5] text-[#1C2024]"
      />

      <section className="py-8 vp-t:py-10 vp-d:py-12">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 vp-d:grid-cols-2 vp-d:gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1B365D]/70">Luštica Bay · Crna Gora</p>
              <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.08] tracking-tight vp-t:text-4xl vp-d:text-5xl">
                The Grand Villa
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#4A5560] vp-d:text-base">{dict.tplLuxuryAbout}</p>

              <div className={`mt-6 grid gap-3 ${mobile ? "grid-cols-2" : "grid-cols-2 vp-d:grid-cols-4"}`}>
                {specs.map((item) => (
                  <div key={item.value} className="rounded-2xl border bg-white px-3 py-3" style={{ borderColor: CHAMPAGNE }}>
                    <item.Icon className="h-4 w-4 text-[#1B365D]" />
                    <div className="mt-2 text-sm font-semibold">{item.value}</div>
                    <div className="text-[10px] uppercase leading-tight tracking-[0.12em] text-[#8A8F96]">{item.label}</div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => (mobile ? setBookOpen(true) : scrollToId("lux-book"))}
                className="mt-6 inline-flex min-h-12 items-center rounded-full bg-[#1B365D] px-7 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
              >
                Rezerviši vilu
              </button>
            </div>

            <FramedMedia
              src={LUXURY.hero}
              alt="Villa Aurora"
              ratio="aspect-[4/3] vp-d:aspect-[4/5]"
              className="vp-d:max-h-[460px]"
              eager
            />
          </div>
        </Container>
      </section>

      <Section id="lux-story">
        <div className="grid grid-cols-1 gap-8 vp-d:grid-cols-2 vp-d:gap-12">
          <div className="vp-d:sticky vp-d:top-24 vp-d:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1B365D]/70">{dict.tplDemoOverview}</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight vp-t:text-3xl vp-d:text-[2rem]">
              Kuća klesana u kamenu, okrenuta otvorenom moru
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4A5560]">
              Vila je podignuta na terasama maslinjaka iznad zaliva. Tri nivoa, četiri spavaće sobe i unutrašnje dvorište
              koje ceo dan prati sunce. Arhitektura je namerno tiha — kamen, hrast i staklo, bez ijednog suvišnog detalja.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-[#3A424A]">
                  <span className="mt-2 h-px w-6 shrink-0 bg-[#1B365D]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {mobile ? (
            <SnapRow>
              {editorial.map((photo) => (
                <SnapCard key={photo.src}>
                  <FramedMedia src={photo.thumb} alt={photo.alt} ratio="aspect-[4/5]" />
                </SnapCard>
              ))}
            </SnapRow>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {editorial.map((photo, i) => (
                <FramedMedia
                  key={photo.src}
                  src={photo.thumb}
                  alt={photo.alt}
                  ratio={i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}
                  className={i === 0 ? "col-span-2" : ""}
                />
              ))}
            </div>
          )}
        </div>
      </Section>

      <Section id="lux-suites" className="bg-white/60">
        <SectionHead
          eyebrow={dict.tplDemoUnits}
          title="Četiri apartmana, nijedan isti"
          lead="Svaki apartman ima sopstveni ulaz, terasu i pogled. Cene su noćne, za dva gosta, sa doručkom."
          eyebrowClass="text-[#1B365D]/70"
          titleClass="font-display font-semibold"
          leadClass="text-[#4A5560]"
        />
        {mobile ? (
          <SnapRow className="mt-6">
            {suites.map((suite) => (
              <SnapCard key={suite.name} className="overflow-hidden rounded-2xl border border-[#E8DFD8] bg-white">
                <AspectMedia src={suite.img} alt={suite.name} ratio="aspect-[4/3] max-h-[240px]" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl">{suite.name}</h3>
                    <span className="shrink-0 font-display text-lg text-[#1B365D]">{suite.price}€</span>
                  </div>
                  <p className="mt-1 text-xs text-[#8A8F96]">
                    {suite.area} · {suite.guests} {dict.tplDemoSleeps} · {suite.bed}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A5560]">{suite.text}</p>
                  <button
                    type="button"
                    onClick={() => setBookOpen(true)}
                    className="mt-5 flex min-h-12 w-full shrink-0 items-center justify-center rounded-full bg-[#1B365D] text-sm font-semibold text-white"
                  >
                    {dict.tplDemoReserve}
                  </button>
                </div>
              </SnapCard>
            ))}
          </SnapRow>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-5 vp-d:grid-cols-3">
            {suites.map((suite) => (
              <article
                key={suite.name}
                className="flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: CHAMPAGNE }}
              >
                <FramedMedia src={suite.img} alt={suite.name} ratio="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-5 vp-d:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl">{suite.name}</h3>
                    <span className="shrink-0 font-display text-lg text-[#1B365D]">{suite.price}€</span>
                  </div>
                  <p className="mt-1 text-xs text-[#8A8F96]">
                    {suite.area} · {suite.guests} {dict.tplDemoSleeps} · {suite.bed}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A5560]">{suite.text}</p>
                  <button
                    type="button"
                    onClick={() => scrollToId("lux-book")}
                    className="mt-5 flex min-h-12 w-full shrink-0 items-center justify-center rounded-full border border-[#1B365D] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1B365D] transition-colors hover:bg-[#1B365D] hover:text-white"
                  >
                    {dict.tplDemoReserve}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section id="lux-concierge">
        <SectionHead
          eyebrow={dict.tplDemoConcierge}
          title="Usluge koje dolaze uz ključ"
          eyebrowClass="text-[#1B365D]/70"
          titleClass="font-display font-semibold"
          leadClass="text-[#4A5560]"
        />
        {mobile ? (
          <div className="mt-6 space-y-3">
            {concierge.map((item, i) => (
              <div key={item.title} className="overflow-hidden rounded-2xl border bg-white" style={{ borderColor: CHAMPAGNE }}>
                <button
                  type="button"
                  onClick={() => setService(service === i ? null : i)}
                  className="flex min-h-12 w-full items-center justify-between gap-3 p-4 text-left"
                >
                  <span className="font-display text-lg">{item.title}</span>
                  <IconChevron className={`h-4 w-4 shrink-0 text-[#1B365D] transition-transform ${service === i ? "rotate-90" : ""}`} />
                </button>
                {service === i && <p className="px-4 pb-4 text-sm leading-relaxed text-[#4A5560]">{item.text}</p>}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 vp-d:grid-cols-4">
            {concierge.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1 vp-d:p-6"
                style={{ borderColor: CHAMPAGNE }}
              >
                <h3 className="font-display text-lg text-[#1B365D]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A5560]">{item.text}</p>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section id="lux-gallery" className="bg-white/60">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionHead
            eyebrow={dict.tplDemoGallery}
            title="Kuća u svetlu dana"
            eyebrowClass="text-[#1B365D]/70"
            titleClass="font-display font-semibold"
          />
          <button type="button" onClick={() => setOpen(0)} className="min-h-12 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1B365D]">
            {dict.tplDemoViewAll}
          </button>
        </div>
        {mobile ? (
          <SnapRow className="mt-6">
            {LUXURY.photos.slice(0, 6).map((photo, i) => (
              <SnapCard key={photo.src}>
                <FramedMedia src={photo.thumb} alt={photo.alt} ratio="aspect-[4/3]" onClick={() => setOpen(i)} />
              </SnapCard>
            ))}
          </SnapRow>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 vp-d:grid-cols-4">
            {LUXURY.photos.slice(0, 8).map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setOpen(i)}
                className={`tpl-img-zoom relative overflow-hidden rounded-2xl border shadow-[0_12px_28px_-20px_rgba(28,32,36,0.4)] ${
                  desktop && i === 0 ? "col-span-2" : ""
                }`}
                style={{ borderColor: CHAMPAGNE }}
              >
                <AspectMedia src={photo.thumb} alt={photo.alt} ratio="aspect-[4/3] max-h-[280px] vp-d:max-h-[320px]" />
              </button>
            ))}
          </div>
        )}
      </Section>

      <Section id="lux-location">
        <SectionHead
          eyebrow={dict.tplDemoLocation}
          title="Luštica Bay 14, Tivat"
          eyebrowClass="text-[#1B365D]/70"
          titleClass="font-display font-semibold"
        />
        <div className="mt-8 grid grid-cols-1 gap-6 vp-dt:grid-cols-2">
          <FramedMedia src={LUXURY.photos[8].thumb} alt="Luštica" ratio="aspect-[16/10]" />
          <ul className="divide-y divide-[#E8DFD8] rounded-2xl border border-[#E8DFD8] bg-white px-5 vp-d:px-6">
            {[
              [dict.tplDemoAirport, "Tivat 18 min"],
              [dict.tplDemoRestaurant, "Porto 6 min"],
              [dict.tplDemoSupermarket, "4 min"],
              [dict.tplAmBeach, "privatna, 40 m"],
            ].map(([key, value]) => (
              <li key={key} className="flex items-center justify-between gap-4 py-3.5 text-sm">
                <span className="text-[#4A5560]">{key}</span>
                <span className="font-semibold text-[#1B365D]">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="lux-reviews" className="bg-white/60">
        <SectionHead
          eyebrow={dict.tplDemoReviews}
          title="Gosti o vili"
          eyebrowClass="text-[#1B365D]/70"
          titleClass="font-display font-semibold"
        />
        {mobile ? (
          <SnapCarousel className="mt-6" dotClass="bg-[#1B365D]">
            {reviews.map((item) => (
              <div key={item.name}>{reviewCard(item)}</div>
            ))}
          </SnapCarousel>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-5 vp-d:grid-cols-3">
            {reviews.map((item) => (
              <div key={item.name}>{reviewCard(item)}</div>
            ))}
          </div>
        )}
      </Section>

      <Section id="lux-book">
        <div className="grid grid-cols-1 items-stretch gap-6 vp-d:grid-cols-[1fr_0.85fr]">
          <div className="flex h-full flex-col rounded-2xl border bg-white p-5 vp-d:p-7" style={{ borderColor: CHAMPAGNE }}>
            <h2 className="font-display text-2xl tracking-tight vp-d:text-[1.75rem]">{dict.tplDemoInquiry}</h2>
            <p className="mt-2 text-sm text-[#4A5560]">Odgovaramo u roku od dva sata, svakog dana do 22h.</p>
            <div className="mt-6">
              <InquiryForm
                dict={dict}
                accentClass="text-[#1B365D]"
                inputClass="rounded-xl border border-[#E8DFD8] bg-[#FBF9F5] text-sm outline-none focus:border-[#1B365D]/40"
                buttonClass="rounded-full bg-[#1B365D] text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
              />
            </div>
          </div>
          <aside className="flex h-full flex-col rounded-2xl border bg-white p-5 vp-d:p-7" style={{ borderColor: CHAMPAGNE }}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1B365D]/70">{dict.tplDemoSeasonal}</p>
            <ul className="mt-4 divide-y divide-[#E8DFD8]">
              {suites.map((suite) => (
                <li key={suite.name} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <span className="text-[#4A5560]">{suite.name}</span>
                  <span className="font-display text-[#1B365D]">{suite.price}€</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between gap-3 text-sm">
              <span className="inline-flex items-center gap-2 text-[#4A5560]">
                <IconUsers className="h-4 w-4" /> {dict.tplDemoGuests}
              </span>
              <span className="inline-flex items-center gap-3">
                <button type="button" className="min-h-12 min-w-12 text-lg" onClick={() => setGuests((g) => Math.max(1, g - 1))}>
                  −
                </button>
                <span className="font-semibold">{guests}</span>
                <button type="button" className="min-h-12 min-w-12 text-lg" onClick={() => setGuests((g) => Math.min(8, g + 1))}>
                  +
                </button>
              </span>
            </div>
            <p className="mt-auto pt-6 text-sm leading-relaxed text-[#4A5560]">
              Brži odgovor dobijate na WhatsApp — šaljemo dostupnost i tačnu cenu za odabrane datume.
            </p>
            <a
              href="https://wa.me/381677747710"
              className="mt-4 flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full border text-sm font-semibold text-[#1B365D]"
              style={{ borderColor: NAVY }}
            >
              <IconWhatsApp className="h-6 w-6" />
              {dict.tplDemoWhatsApp}
            </a>
          </aside>
        </div>
      </Section>

      <footer className="border-t py-10" style={{ borderColor: CHAMPAGNE }}>
        <Container>
          <div className="grid grid-cols-1 gap-8 vp-dt:grid-cols-3">
            <div>
              <div className="font-display tracking-[0.28em] text-[#1B365D]">AURORA</div>
              <p className="mt-4 text-sm text-[#4A5560]">Luštica Bay 14, Tivat</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-[#4A5560]">
                <IconPhone className="h-4 w-4" /> +382 67 000 000
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-[#4A5560]">
                <IconMail className="h-4 w-4" /> stay@villaaurora.me
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1B365D]/70">{dict.tplDemoPolicies}</h3>
              <p className="mt-4 text-sm text-[#4A5560]">
                {dict.tplDemoCheckIn} 15:00 · {dict.tplDemoCheckOut} 11:00
              </p>
              <p className="mt-2 text-sm text-[#4A5560]">
                {dict.tplDemoMinStay}: 3 {dict.tplDemoNights}
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1B365D]/70">{dict.tplDemoFollow}</h3>
              <span className="mt-4 inline-flex text-[#1B365D]">
                <IconInstagram className="h-5 w-5" />
              </span>
              <p className="mt-6 text-[11px] text-[#8A8F96]">© 2026 Villa Aurora</p>
            </div>
          </div>
        </Container>
      </footer>

      {bookOpen && (
        <div className="fixed inset-0 z-50 flex items-end bg-[#1C2024]/50 p-3">
          <div className="w-full rounded-2xl border bg-[#FBF9F5] p-5" style={{ borderColor: CHAMPAGNE }}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg">{dict.tplDemoBook}</h3>
              <button type="button" onClick={() => setBookOpen(false)} className="min-h-12 min-w-12 text-2xl" aria-label={dict.tplClose}>
                ×
              </button>
            </div>
            <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <label className="text-[10px] uppercase tracking-[0.14em] text-[#1B365D]/70">
                {dict.tplDemoCheckIn}
                <input type="date" defaultValue="2026-08-20" className="mt-1 min-h-12 w-full rounded-xl border border-[#E8DFD8] bg-white px-4 text-sm outline-none" />
              </label>
              <label className="text-[10px] uppercase tracking-[0.14em] text-[#1B365D]/70">
                {dict.tplDemoCheckOut}
                <input type="date" defaultValue="2026-08-24" className="mt-1 min-h-12 w-full rounded-xl border border-[#E8DFD8] bg-white px-4 text-sm outline-none" />
              </label>
              <button
                type="button"
                onClick={() => {
                  setBookOpen(false);
                  scrollToId("lux-book");
                }}
                className="min-h-12 rounded-full bg-[#1B365D] text-sm font-semibold text-white"
              >
                {dict.tplDemoBook} · 850€
              </button>
            </form>
          </div>
        </div>
      )}

      {open !== null && (
        <Lightbox
          photos={LUXURY.photos}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((i) => (i === null ? 0 : (i + LUXURY.photos.length - 1) % LUXURY.photos.length))}
          onNext={() => setOpen((i) => (i === null ? 0 : (i + 1) % LUXURY.photos.length))}
          closeLabel={dict.tplClose}
        />
      )}
    </div>
  );
}
