"use client";

import { useState } from "react";
import type { Dictionary } from "../../lib/dictionaries";
import { Lightbox, Photo } from "./Photo";
import {
  IconArea,
  IconBath,
  IconBed,
  IconChevron,
  IconFlame,
  IconInstagram,
  IconKitchen,
  IconLeaf,
  IconMail,
  IconMapPin,
  IconParking,
  IconPhone,
  IconStar,
  IconUsers,
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
  SnapCard,
  SnapRow,
  scrollToId,
} from "./layout-kit";
import { AVATARS, BOUTIQUE } from "./photos";
import { useViewport } from "./viewport";

const TERRA = "#C87D55";

export default function BoutiqueTemplate({ dict }: { dict: Dictionary }) {
  const vp = useViewport();
  const mobile = vp === "mobile";
  const desktop = vp === "desktop";
  const [open, setOpen] = useState<number | null>(null);
  const [faq, setFaq] = useState<number | null>(0);
  const [guests, setGuests] = useState(2);
  const [drawer, setDrawer] = useState(false);

  const nav = [
    [dict.tplDemoUnits, "btq-rooms"],
    [dict.tplDemoAmenities, "btq-amenities"],
    [dict.tplDemoHost, "btq-host"],
    [dict.tplDemoRules, "btq-rules"],
    [dict.tplDemoFaq, "btq-faq"],
  ] as const;

  const rooms = [
    {
      name: "Lipa",
      img: BOUTIQUE.photos[2].thumb,
      guests: 2,
      price: 95,
      bed: dict.tplDemoQueen,
      text: "Bračni krevet, lanene zavese i pogled na vinograd iza kuće.",
      am: [dict.tplAmFire, dict.tplAmWifi, dict.tplAmGarden],
    },
    {
      name: "Loza loft",
      img: BOUTIQUE.photos[1].thumb,
      guests: 3,
      price: 120,
      bed: dict.tplDemoKing,
      text: "Visoki plafon sa drvenim gredama, kamin ispod i trem za jutarnju kafu.",
      am: [dict.tplAmFire, dict.tplAmKitchen, dict.tplAmAc],
    },
    {
      name: "Tavan",
      img: BOUTIQUE.photos[9].thumb,
      guests: 2,
      price: 80,
      bed: dict.tplDemoSofa,
      text: "Mali i topao prostor pod krovom od ćeramide. Idealno za dvoje.",
      am: [dict.tplAmHeat, dict.tplAmWifi, dict.tplAmTv],
    },
  ];

  const bento = [
    { title: "Kamin i dnevni boravak", text: "Hrastove fotelje, drva u korpi i tišina posle 22h.", img: BOUTIQUE.photos[1].thumb, Icon: IconFlame, span: "vp-d:col-span-2" },
    { title: "Coffee bar", text: "Mlin, filter i domaći džem svakog jutra.", img: BOUTIQUE.photos[5].thumb, Icon: IconKitchen, span: "" },
    { title: "Šumska sauna", text: "Grejanje na drva, 15 minuta hoda od kuće.", img: BOUTIQUE.photos[3].thumb, Icon: IconLeaf, span: "" },
    { title: "Privatna bašta", text: "Ograđeno dvorište, roštilj i dugačak drveni stol.", img: BOUTIQUE.photos[8].thumb, Icon: IconLeaf, span: "vp-d:col-span-2" },
  ];

  const timeline = [
    { time: "14:00", title: dict.tplDemoCheckIn, text: "Ključ u kutiji ispod masline, čajnik je već uključen." },
    { time: "17:00", title: "Šetnja kroz vinograd", text: "Staza kroz zasad kreće odmah iza kapije, 40 minuta lagano." },
    { time: "21:00", title: dict.tplAmFire, text: "Drva su u šupi. Potpala i šibice su u korpi kraj kamina." },
    { time: "22:00", title: dict.tplDemoRules, text: "Tišina u dvorištu — kamin, knjiga i ništa od muzike napolju." },
  ];

  const faqs = [
    { q: "Kako funkcioniše otkazivanje?", a: "Besplatno do sedam dana pre dolaska. Posle toga zadržavamo prvu noć." },
    { q: "Da li su ljubimci dozvoljeni?", a: "Mali psi po dogovoru. Bašta je ograđena, a posuda i ćebe su tu." },
    { q: "Kako se kuća greje?", a: "Kamin plus podno grejanje u kupatilima. Drva su uključena u cenu." },
    { q: "Ima li parkinga?", a: "Dva mesta ispred kapije, besplatno i u senci lipa." },
  ];

  const masonry = [
    { photo: BOUTIQUE.photos[0], ratio: "aspect-[4/5]", cap: "Kuća u lipama" },
    { photo: BOUTIQUE.photos[1], ratio: "aspect-square", cap: dict.tplAmFire },
    { photo: BOUTIQUE.photos[2], ratio: "aspect-[3/4]", cap: dict.tplDemoBedroom },
    { photo: BOUTIQUE.photos[4], ratio: "aspect-[4/3]", cap: dict.tplAmKitchen },
    { photo: BOUTIQUE.photos[8], ratio: "aspect-[16/10]", cap: dict.tplAmGarden },
    { photo: BOUTIQUE.photos[5], ratio: "aspect-square", cap: "Jutarnja kafa" },
  ];

  const reservationCard = (
    <form
      id="btq-book"
      className="w-full rounded-3xl bg-white p-6 shadow-[0_24px_60px_-32px_rgba(92,64,51,0.5)] vp-d:p-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: TERRA }}>
        {dict.tplDemoBook}
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">Kuća Lipa</h2>
      <p className="mt-1 text-sm text-[#8A7366]">Deurić 12, Fruška Gora</p>

      <div className="mt-5 grid grid-cols-1 gap-3 vp-d:grid-cols-2">
        <label className="text-[11px] font-bold text-[#8A7366]">
          {dict.tplDemoCheckIn}
          <input type="date" defaultValue="2026-09-04" className="mt-1 min-h-12 w-full rounded-2xl bg-[#F6F1E8] px-4 text-sm outline-none" />
        </label>
        <label className="text-[11px] font-bold text-[#8A7366]">
          {dict.tplDemoCheckOut}
          <input type="date" defaultValue="2026-09-07" className="mt-1 min-h-12 w-full rounded-2xl bg-[#F6F1E8] px-4 text-sm outline-none" />
        </label>
      </div>

      <label className="mt-3 block text-[11px] font-bold text-[#8A7366]">
        {dict.tplDemoGuests}
        <div className="mt-1 flex min-h-12 items-center justify-between rounded-2xl bg-[#F6F1E8] px-3 text-sm">
          <button type="button" className="min-h-12 min-w-12 text-lg" onClick={() => setGuests((g) => Math.max(1, g - 1))}>
            −
          </button>
          <span className="font-semibold">
            {guests} {dict.tplDemoSleeps}
          </span>
          <button type="button" className="min-h-12 min-w-12 text-lg" onClick={() => setGuests((g) => Math.min(6, g + 1))}>
            +
          </button>
        </div>
      </label>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <div className="text-[11px] text-[#8A7366]">{dict.tplDemoFrom}</div>
          <div className="font-display text-3xl font-semibold">
            95€ <span className="text-sm font-normal text-[#8A7366]">/ {dict.tplDemoPerNight}</span>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 min-h-12 w-full rounded-full text-sm font-bold text-white transition-transform duration-300 hover:scale-[1.02]"
        style={{ backgroundColor: TERRA }}
      >
        {dict.tplDemoCheckAvail}
      </button>
      <p className="mt-3 text-center text-[11px] text-[#8A7366]">Bez provizije platforme · potvrda istog dana</p>
    </form>
  );

  return (
    <div className="overflow-x-clip bg-[#FDFBF7] font-sans text-[#2C221E]">
      <SiteNav
        brand={<div className="truncate font-display text-lg font-semibold" style={{ color: TERRA }}>Kuća Lipa</div>}
        links={nav}
        ctaLabel={dict.tplDemoBook}
        onCta={() => (mobile ? setDrawer(true) : scrollToId("btq-hero"))}
        menuLabel={dict.tplDemoMenu}
        closeLabel={dict.tplClose}
        barClass="bg-[#FDFBF7]/85 shadow-[0_1px_0_rgba(44,34,30,0.08)] backdrop-blur-md"
        linkClass="font-semibold text-[#6A5346] hover:text-[#C87D55]"
        ctaClass="rounded-full bg-[#C87D55] text-[12px] font-bold text-white"
        drawerClass="bg-[#FDFBF7] text-[#2C221E]"
      />

      <section id="btq-hero" className="py-6 vp-t:py-10 vp-d:py-14">
        <Container>
          {mobile ? (
            <div className="relative max-h-[420px] overflow-hidden rounded-3xl">
              <AspectMedia src={BOUTIQUE.hero} alt="Kuća Lipa" ratio="aspect-[4/5] max-h-[420px]" eager />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/75 via-transparent to-transparent" />
              <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold" style={{ color: TERRA }}>
                95€ / {dict.tplDemoPerNight}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold" style={{ color: TERRA }}>
                  <IconStar className="h-3 w-3" /> Superhost 4.92
                </span>
                <h1 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-white">Cozy Hideaway</h1>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{dict.tplBoutiqueAbout}</p>
                <button
                  type="button"
                  onClick={() => setDrawer(true)}
                  className="mt-4 min-h-12 w-full rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: TERRA }}
                >
                  {dict.tplDemoCheckAvail}
                </button>
              </div>
            </div>
          ) : (
            <div className={`grid gap-6 ${desktop ? "grid-cols-2 items-center gap-10" : "grid-cols-1"}`}>
              <div className="relative max-h-[450px] overflow-hidden rounded-3xl vp-d:max-h-[460px]">
                <AspectMedia src={BOUTIQUE.hero} alt="Kuća Lipa" ratio={`${desktop ? "aspect-[4/5]" : "aspect-[16/10]"} max-h-[450px] vp-d:max-h-[460px]`} eager />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 vp-d:p-8">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold" style={{ color: TERRA }}>
                    <IconStar className="h-3 w-3" /> Superhost 4.92
                  </span>
                  <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-white vp-d:text-4xl">
                    Cozy Hideaway
                  </h1>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">{dict.tplBoutiqueAbout}</p>
                </div>
              </div>
              {reservationCard}
            </div>
          )}
        </Container>
      </section>

      <Section id="btq-overview">
        <div className="grid grid-cols-2 gap-3 vp-t:grid-cols-3 vp-d:grid-cols-5">
          {[
            { Icon: IconArea, n: "86 m²", l: dict.tplDemoOverview },
            { Icon: IconUsers, n: "6", l: dict.tplDemoSleeps },
            { Icon: IconBed, n: "3", l: dict.tplDemoRooms },
            { Icon: IconBath, n: "2", l: dict.tplDemoBaths },
            { Icon: IconMapPin, n: "12 min", l: dict.tplDemoCenter },
          ].map((item) => (
            <div key={item.l} className="rounded-3xl bg-white p-4 text-center shadow-sm vp-d:p-6">
              <item.Icon className="mx-auto h-5 w-5 text-[#C87D55]" />
              <div className="mt-2 font-display text-xl font-semibold vp-d:text-2xl">{item.n}</div>
              <div className="mt-1 truncate text-[11px] text-[#8A7366]">{item.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="btq-rooms" className="bg-white/70">
        <SectionHead
          eyebrow={dict.tplDemoUnits}
          title="Tri sobe, svaka sa svojim mirisom drveta"
          lead="Cene su po noći za dva gosta. Doručak sa imanja je uključen u svaki boravak."
          eyebrowClass="text-[#C87D55]"
          leadClass="text-[#6A5346]"
        />
        {mobile ? (
          <SnapRow className="mt-8">
            {rooms.map((room) => (
              <SnapCard key={room.name} className="overflow-hidden rounded-3xl bg-white shadow-[0_16px_40px_-28px_rgba(92,64,51,0.55)]">
                <AspectMedia src={room.img} alt={room.name} ratio="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">{room.name}</h3>
                    <span className="shrink-0 rounded-full px-3 py-1 text-sm font-bold" style={{ backgroundColor: "rgba(200,125,85,0.12)", color: TERRA }}>
                      {room.price}€
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#8A7366]">
                    {room.guests} {dict.tplDemoSleeps} · {room.bed}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4C3D34]">{room.text}</p>
                  <button
                    type="button"
                    onClick={() => scrollToId("btq-inquiry")}
                    className="mt-5 flex min-h-12 w-full shrink-0 items-center justify-center rounded-full bg-[#2C221E] text-sm font-bold text-white"
                  >
                    {dict.tplDemoInquire}
                  </button>
                </div>
              </SnapCard>
            ))}
          </SnapRow>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 vp-t:grid-cols-2 vp-d:grid-cols-3">
            {rooms.map((room) => (
              <article
                key={room.name}
                className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_16px_40px_-28px_rgba(92,64,51,0.55)] transition-all duration-300 vp-d:hover:-translate-y-1"
              >
                <AspectMedia src={room.img} alt={room.name} ratio="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-5 vp-d:p-6">
                  <div className="flex min-h-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold">{room.name}</h3>
                      <span className="shrink-0 rounded-full px-3 py-1 text-sm font-bold" style={{ backgroundColor: "rgba(200,125,85,0.12)", color: TERRA }}>
                        {room.price}€
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#8A7366]">
                      {room.guests} {dict.tplDemoSleeps} · {room.bed}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#4C3D34]">{room.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {room.am.map((label) => (
                        <li key={label} className="rounded-full bg-[#F6F1E8] px-3 py-1 text-[11px] font-semibold text-[#6A5346]">
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollToId("btq-inquiry")}
                    className="mt-5 flex min-h-12 w-full shrink-0 items-center justify-center rounded-full bg-[#2C221E] text-sm font-bold text-white"
                  >
                    {dict.tplDemoInquire}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section id="btq-amenities">
        <SectionHead eyebrow={dict.tplDemoAmenities} title="Šta je uvek spremno" eyebrowClass="text-[#C87D55]" />
        <div className="mt-8 grid grid-cols-1 gap-4 vp-t:grid-cols-2 vp-d:grid-cols-3">
          {bento.map((cell) => (
            <article
              key={cell.title}
              className={`relative min-h-[180px] max-h-[280px] overflow-hidden rounded-3xl transition-all duration-300 vp-d:min-h-[220px] vp-d:max-h-[320px] vp-d:hover:-translate-y-1 ${cell.span}`}
            >
              <Photo src={cell.img} alt={cell.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/85 via-[#2C221E]/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-5 vp-d:p-8">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95" style={{ color: TERRA }}>
                  <cell.Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white vp-d:text-xl">{cell.title}</h3>
                <p className="mt-1 max-w-sm text-sm leading-relaxed text-white/80">{cell.text}</p>
              </div>
            </article>
          ))}
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {[dict.tplAmWifi, dict.tplAmParking, dict.tplAmKitchen, dict.tplAmHeat, dict.tplAmBbq, dict.tplAmPets].map((label, i) => (
            <li key={label} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold shadow-sm">
              {i === 0 ? <IconWifi className="h-4 w-4 text-[#C87D55]" /> : <IconLeaf className="h-4 w-4 text-[#C87D55]" />}
              {label}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="btq-host" className="bg-white/70">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative mx-auto h-20 w-20 shrink-0 overflow-hidden rounded-full ring-4 ring-white vp-d:h-24 vp-d:w-24">
            <Photo src={BOUTIQUE.host} alt="Nikola" />
          </div>
          <span className="mt-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ backgroundColor: TERRA }}>
            <IconStar className="h-3 w-3" /> Superhost · {dict.tplDemoVerified}
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight vp-d:text-3xl">Dobro došli, ja sam Nikola</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#6A5346] vp-d:text-base">
            Kuću je zidao moj deda 1963. godine, a mi smo je obnovili sopstvenim rukama — istim kamenom i istim hrastom.
            Živim u selu, pet minuta odavde. Ako vam nešto treba, tu sam za pola sata.
          </p>
          <p className="mt-4 font-display text-2xl italic" style={{ color: TERRA }}>
            Nikola
          </p>
          <button
            type="button"
            onClick={() => scrollToId("btq-inquiry")}
            className="mt-6 min-h-12 rounded-full border-2 px-6 text-sm font-bold"
            style={{ borderColor: TERRA, color: TERRA }}
          >
            Pitajte domaćina
          </button>
        </div>
      </Section>

      <Section id="btq-rules">
        <SectionHead eyebrow={dict.tplDemoRules} title="Kako izgleda prvi dan" eyebrowClass="text-[#C87D55]" />
        {desktop ? (
          <ol className="mt-10 grid grid-cols-4 gap-6">
            {timeline.map((step, i) => (
              <li key={step.title} className="relative">
                <div className="flex items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: TERRA }}>
                    {i + 1}
                  </span>
                  {i < timeline.length - 1 && <span className="ml-2 h-0.5 flex-1 bg-[#C87D55]/25" />}
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: TERRA }}>
                  {step.time}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6A5346]">{step.text}</p>
              </li>
            ))}
          </ol>
        ) : (
          <ol className="relative mt-8 space-y-6 border-l-2 border-[#C87D55]/25 pl-6">
            {timeline.map((step) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[1.95rem] top-1 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-[#FDFBF7]" style={{ backgroundColor: TERRA }} />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: TERRA }}>
                  {step.time}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#6A5346]">{step.text}</p>
              </li>
            ))}
          </ol>
        )}
      </Section>

      <Section id="btq-gallery" className="bg-white/70">
        <SectionHead eyebrow={dict.tplDemoGallery} title="Kuća, bašta i vinograd" eyebrowClass="text-[#C87D55]" />
        {mobile ? (
          <SnapRow className="mt-6">
            {masonry.map((item, i) => (
              <SnapCard key={item.photo.src} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <AspectMedia src={item.photo.thumb} alt={item.photo.alt} ratio="aspect-[4/3]" onClick={() => setOpen(i)} />
                <p className="p-4 text-[12px] font-semibold text-[#6A5346]">{item.cap}</p>
              </SnapCard>
            ))}
          </SnapRow>
        ) : (
          <div className={`mt-8 grid gap-4 ${desktop ? "auto-rows-[190px] grid-cols-3" : "grid-cols-2"}`}>
            {masonry.map((item, i) => (
              <button
                key={item.photo.src}
                type="button"
                onClick={() => setOpen(i)}
                className={`group relative overflow-hidden rounded-3xl text-left shadow-sm transition-all duration-300 vp-d:hover:-translate-y-1 ${
                  desktop ? (i === 0 ? "col-span-2 row-span-2" : "") : "aspect-[4/3]"
                }`}
              >
                <Photo src={item.photo.thumb} alt={item.photo.alt} />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2C221E]/85 to-transparent px-4 pb-3 pt-10 text-[12px] font-bold text-white">
                  {item.cap}
                </span>
              </button>
            ))}
          </div>
        )}
      </Section>

      <Section id="btq-reviews">
        <SectionHead eyebrow={dict.tplDemoReviews} title="Gosti o Kući Lipa" eyebrowClass="text-[#C87D55]" />
        <div className="mt-8 grid grid-cols-1 gap-4 vp-t:grid-cols-2 vp-d:grid-cols-3">
          {[
            { name: "Sara M.", date: "avg 2026", rating: 5, text: dict.tplBoutiqueReview, avatar: AVATARS[2] },
            { name: "Nenad P.", date: "jul 2026", rating: 5, text: "Vinarija peške, kafa na tremu, kamin do ponoći. Baš onako kako treba.", avatar: AVATARS[1] },
            { name: "Elena V.", date: "jun 2026", rating: 4, text: "Vratili bismo se u oktobru, kad lišće crveni i dim ide iz dimnjaka.", avatar: AVATARS[0] },
          ].map((item) => (
            <article key={item.name} className="rounded-3xl bg-white p-5 shadow-sm vp-d:p-6">
              <div className="flex items-center gap-3">
                <Avatar src={item.avatar} alt={item.name} size="h-12 w-12" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-bold">{item.name}</div>
                  <div className="text-[11px] text-[#8A7366]">{item.date}</div>
                </div>
              </div>
              <div className="mt-3" style={{ color: TERRA }}>
                <Stars rating={item.rating} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#4C3D34]">“{item.text}”</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="btq-faq" className="bg-white/70">
        <SectionHead eyebrow={dict.tplDemoFaq} title="Pitanja pre dolaska" eyebrowClass="text-[#C87D55]" />
        <div className={`mt-8 grid gap-4 ${mobile ? "grid-cols-1" : "grid-cols-2"}`}>
          {faqs.map((item, i) => (
            <div key={item.q} className="h-fit overflow-hidden rounded-3xl bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setFaq(faq === i ? null : i)}
                className="flex min-h-12 w-full items-center justify-between gap-3 p-5 text-left text-sm font-bold"
              >
                {item.q}
                <IconChevron className={`h-4 w-4 shrink-0 text-[#C87D55] transition-transform ${faq === i ? "rotate-90" : ""}`} />
              </button>
              {faq === i && <p className="px-5 pb-5 text-sm leading-relaxed text-[#6A5346]">{item.a}</p>}
            </div>
          ))}
        </div>
      </Section>

      <Section id="btq-inquiry">
        <div className="rounded-3xl p-6 text-white vp-d:p-10" style={{ backgroundColor: TERRA }}>
          <div className="grid grid-cols-1 gap-6 vp-d:grid-cols-2 vp-d:gap-10">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight vp-d:text-3xl">{dict.tplDemoInquiry}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Pišite nam datume i broj gostiju — odgovaramo istog dana, sa tačnom cenom bez provizije.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li className="inline-flex items-center gap-2">
                  <IconPhone className="h-4 w-4" /> +381 63 000 000
                </li>
                <li className="inline-flex items-center gap-2">
                  <IconMail className="h-4 w-4" /> hello@kucalipa.rs
                </li>
              </ul>
            </div>
            <InquiryForm
              dict={dict}
              accentClass="text-white"
              inputClass="rounded-2xl bg-white/95 text-sm text-[#2C221E] outline-none"
              buttonClass="rounded-full bg-[#2C221E] text-sm font-bold text-white"
            />
          </div>
        </div>
      </Section>

      <footer className="py-12">
        <Container>
          <div className="grid grid-cols-1 gap-8 rounded-3xl bg-white p-6 shadow-sm vp-dt:grid-cols-3 vp-d:p-8">
            <div>
              <div className="font-display text-xl font-semibold" style={{ color: TERRA }}>
                Kuća Lipa
              </div>
              <p className="mt-3 text-sm text-[#6A5346]">Deurić 12, Fruška Gora</p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: TERRA }}>
                {dict.tplDemoPolicies}
              </h3>
              <p className="mt-3 text-sm text-[#6A5346]">
                {dict.tplDemoCheckIn} 14:00 · {dict.tplDemoCheckOut} 11:00
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: TERRA }}>
                {dict.tplDemoFollow}
              </h3>
              <div className="mt-3" style={{ color: TERRA }}>
                <IconInstagram className="h-5 w-5" />
              </div>
              <p className="mt-6 text-[11px] text-[#8A7366]">© 2026 Kuća Lipa</p>
            </div>
          </div>
        </Container>
      </footer>

      {drawer && mobile && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/60 p-3">
          <div className="max-h-full w-full overflow-y-auto rounded-3xl bg-[#FDFBF7] p-2">
            <div className="flex justify-end">
              <button type="button" onClick={() => setDrawer(false)} className="min-h-12 min-w-12 text-2xl" aria-label={dict.tplClose}>
                ×
              </button>
            </div>
            {reservationCard}
          </div>
        </div>
      )}

      {open !== null && (
        <Lightbox
          photos={masonry.map((item) => item.photo)}
          index={open}
          onClose={() => setOpen(null)}
          onPrev={() => setOpen((i) => (i === null ? 0 : (i + masonry.length - 1) % masonry.length))}
          onNext={() => setOpen((i) => (i === null ? 0 : (i + 1) % masonry.length))}
          closeLabel={dict.tplClose}
        />
      )}
    </div>
  );
}
