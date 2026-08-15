"use client";

import { useState } from "react";
import type { Dictionary } from "../../lib/dictionaries";
import { Lightbox, Photo } from "./Photo";
import {
  IconArea,
  IconBed,
  IconChevron,
  IconDroplet,
  IconFlame,
  IconInstagram,
  IconLeaf,
  IconMail,
  IconMapPin,
  IconPhone,
  IconStarNight,
  IconSun,
  IconUsers,
  IconWhatsApp,
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
import { AVATARS, GLAMPING } from "./photos";
import { useViewport } from "./viewport";

const TERRA = "#C4703F";
const SAGE = "#7C8B6F";

export default function GlampingTemplate({ dict }: { dict: Dictionary }) {
  const vp = useViewport();
  const mobile = vp === "mobile";
  const desktop = vp === "desktop";
  const [open, setOpen] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [review, setReview] = useState(0);

  const nav = [
    [dict.tplDemoUnits, "glm-domes"],
    [dict.tplDemoExperiences, "glm-experiences"],
    [dict.tplDemoGallery, "glm-gallery"],
    [dict.tplDemoLocation, "glm-location"],
    [dict.tplDemoReviews, "glm-reviews"],
  ] as const;

  const highlights = [
    { label: dict.tplDemoStargazing, img: GLAMPING.photos[5].thumb, target: "glm-experiences" },
    { label: dict.tplAmHotTub, img: GLAMPING.photos[10].thumb, target: "glm-experiences" },
    { label: dict.tplDemoBreakfast, img: GLAMPING.photos[4].thumb, target: "glm-experiences" },
    { label: dict.tplAmSauna, img: GLAMPING.photos[9].thumb, target: "glm-domes" },
  ];

  const domes = [
    {
      name: "Oak Dome",
      img: GLAMPING.photos[11].thumb,
      price: 180,
      guests: 2,
      area: "36 m²",
      text: "Geodezijska kupola sa providnim segmentom nad krevetom. Privatni deck gleda u hrastovu šumu.",
      features: [
        { Icon: IconBed, label: dict.tplDemoKing },
        { Icon: IconStarNight, label: "Krovni prozor" },
        { Icon: IconFlame, label: dict.tplAmHeat },
        { Icon: IconLeaf, label: dict.tplDemoPatio },
      ],
    },
    {
      name: "Canvas Tent",
      img: GLAMPING.photos[0].thumb,
      price: 140,
      guests: 2,
      area: "28 m²",
      text: "Safari platno na drvenoj platformi, bakarni lavabo i lampa na naftu za večernje čitanje.",
      features: [
        { Icon: IconBed, label: dict.tplDemoQueen },
        { Icon: IconDroplet, label: "Privatno kupatilo" },
        { Icon: IconFlame, label: "Peć na drva" },
        { Icon: IconLeaf, label: "Terasa 12 m²" },
      ],
    },
  ];

  const experiences = [
    {
      title: dict.tplDemoStargazing,
      price: "25€",
      text: "Teleskop na proplanku, karta neba, ćebad i čaj od nane. Vodič ostaje dva sata.",
      img: GLAMPING.photos[5].thumb,
      Icon: IconStarNight,
      span: "vp-d:col-span-2 vp-d:row-span-2",
    },
    {
      title: dict.tplAmHotTub,
      price: "40€",
      text: "Kada na drva pored kupole, spremna za vaš dolazak.",
      img: GLAMPING.photos[10].thumb,
      Icon: IconDroplet,
      span: "",
    },
    {
      title: dict.tplDemoBreakfast,
      price: "18€",
      text: "Jaja, med, sir i hleb sa imanja — u korpi pred šatorom u 8h.",
      img: GLAMPING.photos[4].thumb,
      Icon: IconSun,
      span: "",
    },
    {
      title: dict.tplAmSauna,
      price: "30€",
      text: "Cedrova sauna na drva, seansa od 90 minuta uz hladan tuš na otvorenom.",
      img: GLAMPING.photos[9].thumb,
      Icon: IconFlame,
      span: "vp-d:col-span-2",
    },
  ];

  const gallery = GLAMPING.photos.slice(0, 8);

  const reviews = [
    { name: "Maja L.", date: "avg 2026", text: dict.tplGlampingReview, avatar: AVATARS[2] },
    { name: "Owen K.", date: "jul 2026", text: "The dome at night is the whole trip. The breakfast basket was ridiculous in the best way.", avatar: AVATARS[1] },
    { name: "Iva N.", date: "jun 2026", text: "Tiho, toplo i bez ijedne plastične flaše. Jacuzzi i vatra — to je ceo vikend.", avatar: AVATARS[0] },
  ];

  const reviewCard = (item: (typeof reviews)[number]) => (
    <article className="h-full rounded-3xl bg-white p-6 shadow-[0_16px_40px_-30px_rgba(58,53,47,0.55)] vp-d:p-8">
      <div style={{ color: TERRA }}>
        <Stars rating={5} />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#5A5248]">“{item.text}”</p>
      <div className="mt-6 flex items-center gap-3">
        <Avatar src={item.avatar} alt={item.name} size="h-12 w-12" />
        <div className="min-w-0">
          <div className="truncate text-sm font-bold">{item.name}</div>
          <div className="text-[11px] text-[#8A8175]">{item.date}</div>
        </div>
        <span
          className="ml-auto shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: SAGE }}
        >
          {dict.tplDemoVerified}
        </span>
      </div>
    </article>
  );

  return (
    <div className="overflow-x-clip bg-[#F7F4EF] font-sans text-[#3A352F]">
      <SiteNav
        brand={
          <span className="inline-flex items-center gap-2 font-display text-lg font-semibold" style={{ color: TERRA }}>
            <IconLeaf className="h-5 w-5" /> Luna Camp
          </span>
        }
        links={nav}
        ctaLabel={dict.tplDemoBook}
        onCta={() => scrollToId("glm-book")}
        menuLabel={dict.tplDemoMenu}
        closeLabel={dict.tplClose}
        barClass="bg-[#F7F4EF]/85 shadow-[0_1px_0_rgba(58,53,47,0.08)] backdrop-blur-md"
        linkClass="font-semibold text-[#6B6255] hover:text-[#C4703F]"
        ctaClass="rounded-full bg-[#C4703F] text-[12px] font-bold text-white"
        drawerClass="bg-[#F7F4EF] text-[#3A352F]"
      />

      {mobile && (
        <ScrollX className="gap-3 px-4 py-4">
          {highlights.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => scrollToId(item.target)}
              className="flex w-16 shrink-0 flex-col items-center gap-1.5"
            >
              <span
                className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full p-[2px]"
                style={{ background: `linear-gradient(135deg, ${TERRA}, ${SAGE})` }}
              >
                <span className="relative block h-full w-full overflow-hidden rounded-full ring-2 ring-[#F7F4EF]">
                  <Photo src={item.img} alt={item.label} />
                </span>
              </span>
              <span className="w-16 truncate text-center text-[10px] font-bold">{item.label}</span>
            </button>
          ))}
        </ScrollX>
      )}

      <section className="py-8 vp-t:py-12 vp-d:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
              style={{ backgroundColor: SAGE }}
            >
              <IconLeaf className="h-3.5 w-3.5" /> Eko kamp · Fruška Gora
            </span>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight vp-t:text-4xl vp-d:text-5xl">
              Spavaj pod platnom, budi se pod hrastovima
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#6B6255] vp-d:text-base">{dict.tplGlampingAbout}</p>
          </div>

          {!mobile && (
            <div className="mt-10 grid grid-cols-4 gap-4 vp-d:gap-6">
              {highlights.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollToId(item.target)}
                  className="group flex flex-col items-center gap-3 transition-all duration-300 vp-d:hover:-translate-y-1"
                >
                  <span
                    className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full p-[3px] vp-d:h-28 vp-d:w-28"
                    style={{ background: `linear-gradient(135deg, ${TERRA}, ${SAGE})` }}
                  >
                    <span className="relative block h-full w-full overflow-hidden rounded-full ring-4 ring-[#F7F4EF]">
                      <Photo src={item.img} alt={item.label} />
                    </span>
                  </span>
                  <span className="text-sm font-bold">{item.label}</span>
                </button>
              ))}
            </div>
          )}

          <div className="mt-10 overflow-hidden rounded-[2rem] max-h-[420px] vp-t:max-h-[450px] vp-d:max-h-[460px]">
            <AspectMedia src={GLAMPING.hero} alt="Luna Camp" ratio="aspect-[4/3] vp-t:aspect-[16/9] vp-d:aspect-[21/9] max-h-[420px] vp-t:max-h-[450px] vp-d:max-h-[460px]" eager />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 vp-dt:grid-cols-4">
            {[
              { Icon: IconArea, n: "4 ha", l: "hrastove šume" },
              { Icon: IconUsers, n: "6", l: dict.tplDemoUnits },
              { Icon: IconStarNight, n: "4.97", l: dict.tplDemoReviews },
              { Icon: IconMapPin, n: "28 min", l: "Novi Sad" },
            ].map((item) => (
              <div key={item.l} className="rounded-3xl bg-white p-4 text-center shadow-sm vp-d:p-6">
                <item.Icon className="mx-auto h-5 w-5 text-[#C4703F]" />
                <div className="mt-2 font-display text-xl font-semibold vp-d:text-2xl">{item.n}</div>
                <div className="mt-1 truncate text-[11px] text-[#8A8175]">{item.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section id="glm-domes">
        <SectionHead
          eyebrow={dict.tplDemoUnits}
          title="Kupole i šatori među hrastovima"
          lead="Svaka jedinica ima privatan deck, kupatilo i grejanje. Cene su noćne, za dva gosta."
          eyebrowClass="text-[#C4703F]"
          leadClass="text-[#6B6255]"
        />
        {mobile ? (
          <SnapRow className="mt-8">
            {domes.map((dome, index) => (
              <SnapCard key={dome.name} className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_-34px_rgba(58,53,47,0.6)]">
                <AspectMedia src={dome.img} alt={dome.name} ratio="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">{dome.name}</h3>
                    <span className="shrink-0 font-display text-xl font-semibold" style={{ color: TERRA }}>
                      {dome.price}€
                    </span>
                  </div>
                  <p className="mt-3 min-h-[4.875em] text-sm leading-relaxed text-[#5A5248]">{dome.text}</p>
                  <div className="mt-auto pt-4">
                    <button
                      type="button"
                      onClick={() => setExpanded(expanded === index ? null : index)}
                      className="flex min-h-12 w-full items-center justify-between gap-2 rounded-2xl bg-[#F1EBE1] px-4 text-sm font-bold"
                    >
                      Prikaži opremu kupole
                      <IconChevron className={`h-4 w-4 text-[#C4703F] transition-transform ${expanded === index ? "rotate-90" : ""}`} />
                    </button>
                    {expanded === index && (
                      <ul className="mt-3 grid grid-cols-2 gap-2">
                        {dome.features.map((feature) => (
                          <li key={feature.label} className="flex items-center gap-2 rounded-xl bg-[#F7F4EF] px-3 py-2.5 text-xs font-semibold">
                            <feature.Icon className="h-4 w-4 shrink-0 text-[#7C8B6F]" />
                            <span className="truncate">{feature.label}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <button
                      type="button"
                      onClick={() => scrollToId("glm-book")}
                      className="mt-5 flex min-h-12 w-full items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: TERRA }}
                    >
                      {dict.tplDemoReserve}
                    </button>
                  </div>
                </div>
              </SnapCard>
            ))}
          </SnapRow>
        ) : (
          <div className={`mt-8 grid gap-6 ${desktop ? "grid-cols-2" : "grid-cols-1"}`}>
            {domes.map((dome) => (
              <article
                key={dome.name}
                className="flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_-34px_rgba(58,53,47,0.6)] transition-all duration-300 vp-d:hover:-translate-y-1"
              >
                <AspectMedia src={dome.img} alt={dome.name} ratio="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-5 vp-t:p-6 vp-d:p-8">
                  <div className="flex min-h-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-semibold vp-d:text-2xl">{dome.name}</h3>
                        <p className="mt-1 text-xs text-[#8A8175]">
                          {dome.area} · {dome.guests} {dict.tplDemoSleeps}
                        </p>
                      </div>
                      <span className="shrink-0 text-right">
                        <span className="block font-display text-xl font-semibold" style={{ color: TERRA }}>
                          {dome.price}€
                        </span>
                        <span className="block text-[10px] uppercase tracking-wide text-[#8A8175]">{dict.tplDemoPerNight}</span>
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#5A5248]">{dome.text}</p>
                    <ul className="mt-5 grid grid-cols-2 gap-2">
                      {dome.features.map((feature) => (
                        <li key={feature.label} className="flex items-center gap-2 rounded-xl bg-[#F7F4EF] px-3 py-2.5 text-xs font-semibold">
                          <feature.Icon className="h-4 w-4 shrink-0 text-[#7C8B6F]" />
                          <span className="truncate">{feature.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollToId("glm-book")}
                    className="mt-5 flex min-h-12 w-full shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: TERRA }}
                  >
                    {dict.tplDemoReserve}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section id="glm-experiences" className="bg-[#F1EBE1]">
        <SectionHead
          eyebrow={dict.tplDemoExperiences}
          title="Iskustva koja se dodaju uz boravak"
          lead="Odaberite pri rezervaciji — sve pripremamo pre vašeg dolaska."
          eyebrowClass="text-[#C4703F]"
          leadClass="text-[#6B6255]"
        />
        <div className={`mt-8 grid gap-4 ${desktop ? "grid-cols-4" : "grid-cols-1"}`}>
          {experiences.map((item) => (
            <article
              key={item.title}
              className={`relative min-h-[200px] max-h-[320px] overflow-hidden rounded-[2rem] transition-all duration-300 vp-d:hover:-translate-y-1 ${desktop ? item.span : ""}`}
            >
              <Photo src={item.img} alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A352F]/90 via-[#3A352F]/35 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-5 vp-d:p-8">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F4EF]" style={{ color: TERRA }}>
                  <item.Icon className="h-5 w-5" />
                </span>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-white vp-d:text-xl">{item.title}</h3>
                  <span className="rounded-full bg-[#F7F4EF]/95 px-2.5 py-0.5 text-[11px] font-bold" style={{ color: TERRA }}>
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="glm-gallery">
        <SectionHead eyebrow={dict.tplDemoGallery} title="Kamp kroz dan i noć" eyebrowClass="text-[#C4703F]" />
        {mobile ? (
          <SnapRow className="mt-6">
            {gallery.map((photo, i) => (
              <SnapCard key={photo.src} className="overflow-hidden rounded-[1.5rem]">
                <AspectMedia src={photo.thumb} alt={photo.alt} ratio="aspect-[4/3]" onClick={() => setOpen(i)} />
                <p className="p-4 text-xs font-bold text-[#6B6255]">{photo.alt}</p>
              </SnapCard>
            ))}
          </SnapRow>
        ) : (
          <div className={`mt-8 grid gap-4 ${desktop ? "auto-rows-[170px] grid-cols-4" : "grid-cols-2"}`}>
            {gallery.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setOpen(i)}
                className={`relative overflow-hidden rounded-[1.5rem] text-left transition-all duration-300 vp-d:hover:-translate-y-1 ${
                  desktop ? (i === 0 ? "col-span-2 row-span-2" : i === 7 ? "col-span-2" : "") : "aspect-[4/3]"
                }`}
              >
                <Photo src={photo.thumb} alt={photo.alt} />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3A352F]/85 to-transparent px-4 pb-3 pt-10 text-xs font-bold text-white">
                  {photo.alt}
                </span>
              </button>
            ))}
          </div>
        )}
      </Section>

      <Section id="glm-location" className="bg-[#F1EBE1]">
        <SectionHead eyebrow={dict.tplDemoLocation} title="Deurić, Fruška Gora" eyebrowClass="text-[#C4703F]" />
        <div className="mt-8 grid grid-cols-1 gap-6 vp-dt:grid-cols-2">
          <div className="relative min-h-[240px] overflow-hidden rounded-[2rem]">
            <Photo src={GLAMPING.photos[6].thumb} alt="Fruška Gora" />
            <div className="absolute inset-0 bg-[#3A352F]/25" />
            <p className="absolute bottom-4 left-4 rounded-full bg-[#F7F4EF]/95 px-4 py-2 text-xs font-bold">Luna Camp · Deurić</p>
          </div>
          <ul className="grid gap-3">
            {[
              [dict.tplDemoAirport, "BEG · 50 min"],
              [dict.tplDemoRestaurant, "vinarija · 8 min"],
              [dict.tplDemoSupermarket, "Irig · 10 min"],
              [dict.tplDemoCenter, "Novi Sad · 28 min"],
            ].map(([key, value]) => (
              <li key={key} className="flex items-center justify-between gap-4 rounded-3xl bg-white px-5 py-4 text-sm shadow-sm">
                <span className="inline-flex min-w-0 items-center gap-2">
                  <IconMapPin className="h-4 w-4 shrink-0 text-[#7C8B6F]" />
                  <span className="truncate font-semibold">{key}</span>
                </span>
                <span className="shrink-0 font-bold" style={{ color: TERRA }}>
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="glm-reviews">
        <SectionHead eyebrow={dict.tplDemoReviews} title="Gosti o Luna Campu" eyebrowClass="text-[#C4703F]" />
        {desktop ? (
          <div className="mt-8 grid grid-cols-3 gap-6">
            {reviews.map((item) => (
              <div key={item.name}>{reviewCard(item)}</div>
            ))}
          </div>
        ) : (
          <div className="mt-6">
            {reviewCard(reviews[review])}
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setReview((r) => (r + reviews.length - 1) % reviews.length)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm"
                aria-label="prev"
              >
                <IconChevron className="h-5 w-5 rotate-180 text-[#C4703F]" />
              </button>
              <span className="text-xs font-bold text-[#8A8175]">
                {review + 1} / {reviews.length}
              </span>
              <button
                type="button"
                onClick={() => setReview((r) => (r + 1) % reviews.length)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm"
                aria-label="next"
              >
                <IconChevron className="h-5 w-5 text-[#C4703F]" />
              </button>
            </div>
          </div>
        )}
      </Section>

      <Section id="glm-book" className="bg-[#F1EBE1]">
        <div className="grid grid-cols-1 gap-6 vp-d:grid-cols-[1fr_340px]">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm vp-d:p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight vp-d:text-3xl">{dict.tplDemoInquiry}</h2>
            <p className="mt-2 text-sm text-[#6B6255]">Napišite datume i iskustva koja želite — potvrda ide istog dana.</p>
            <div className="mt-6">
              <InquiryForm
                dict={dict}
                accentClass="text-[#C4703F]"
                inputClass="rounded-2xl bg-[#F7F4EF] text-sm outline-none"
                buttonClass="rounded-full bg-[#C4703F] text-sm font-bold text-white"
              />
            </div>
          </div>
          <aside className="h-fit rounded-[2rem] bg-white p-6 shadow-sm vp-d:sticky vp-d:top-24">
            <p className="text-[11px] font-bold uppercase tracking-wide text-[#8A8175]">{dict.tplDemoFrom}</p>
            <p className="font-display text-4xl font-semibold" style={{ color: TERRA }}>
              140€
            </p>
            <p className="text-sm text-[#8A8175]">{dict.tplDemoPerNight}</p>
            <ul className="mt-5 space-y-2 text-sm text-[#5A5248]">
              {[dict.tplDemoBreakfast, dict.tplAmHotTub, dict.tplDemoStargazing].map((label) => (
                <li key={label} className="flex gap-2">
                  <span style={{ color: SAGE }}>✓</span>
                  {label}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/381677747710"
              className="mt-5 flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: TERRA }}
            >
              <IconWhatsApp className="h-6 w-6" />
              {dict.tplDemoWhatsApp}
            </a>
            <a
              href="tel:+381677747710"
              className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 text-sm font-bold"
              style={{ borderColor: TERRA, color: TERRA }}
            >
              <IconPhone className="h-4 w-4" /> {dict.tplDemoCall}
            </a>
          </aside>
        </div>
      </Section>

      <footer className="py-12">
        <Container>
          <div className="grid grid-cols-1 gap-8 rounded-[2rem] bg-white p-6 shadow-sm vp-dt:grid-cols-3 vp-d:p-8">
            <div>
              <div className="inline-flex items-center gap-2 font-display text-xl font-semibold" style={{ color: TERRA }}>
                <IconLeaf className="h-5 w-5" /> Luna Camp
              </div>
              <p className="mt-3 text-sm text-[#6B6255]">Deurić, Fruška Gora</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-[#6B6255]">
                <IconMail className="h-4 w-4" /> stay@lunacamp.rs
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-wide" style={{ color: TERRA }}>
                {dict.tplDemoPolicies}
              </h3>
              <p className="mt-3 text-sm text-[#6B6255]">
                {dict.tplDemoCheckIn} 15:00 · {dict.tplDemoCheckOut} 11:00
              </p>
              <p className="mt-2 text-sm text-[#6B6255]">
                {dict.tplDemoMinStay}: 2 {dict.tplDemoNights}
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-wide" style={{ color: TERRA }}>
                {dict.tplDemoFollow}
              </h3>
              <div className="mt-3" style={{ color: TERRA }}>
                <IconInstagram className="h-5 w-5" />
              </div>
              <p className="mt-6 text-[11px] text-[#8A8175]">© 2026 Luna Camp</p>
            </div>
          </div>
        </Container>
      </footer>

      {open !== null && (
        <Lightbox
          photos={gallery}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((i) => (i === null ? 0 : (i + gallery.length - 1) % gallery.length))}
          onNext={() => setOpen((i) => (i === null ? 0 : (i + 1) % gallery.length))}
          closeLabel={dict.tplClose}
        />
      )}
    </div>
  );
}
