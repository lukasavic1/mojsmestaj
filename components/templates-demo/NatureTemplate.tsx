"use client";

import { useMemo, useState } from "react";
import { Lightbox, Photo } from "./Photo";
import type { Dictionary } from "../../lib/dictionaries";
import {
  IconArea,
  IconBath,
  IconBed,
  IconBike,
  IconChevron,
  IconDroplet,
  IconFlame,
  IconInstagram,
  IconLeaf,
  IconMail,
  IconMapPin,
  IconMountain,
  IconPhone,
  IconSnowflake,
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
  SnapCarousel,
  SnapCard,
  SnapRow,
  scrollToId,
} from "./layout-kit";
import { AVATARS, NATURE, type PhotoCat } from "./photos";
import { useViewport } from "./viewport";

const OAK = "#C29B38";

export default function NatureTemplate({ dict }: { dict: Dictionary }) {
  const vp = useViewport();
  const mobile = vp === "mobile";
  const desktop = vp === "desktop";
  const [open, setOpen] = useState<number | null>(null);
  const [season, setSeason] = useState(0);
  const [filter, setFilter] = useState<PhotoCat | "all">("all");
  const [shot, setShot] = useState(0);

  const nav = [
    [dict.tplDemoUnits, "nat-rooms"],
    [dict.tplDemoActivities, "nat-activities"],
    [dict.tplDemoSeasonal, "nat-pricing"],
    [dict.tplDemoGallery, "nat-gallery"],
    [dict.tplDemoLocation, "nat-location"],
  ] as const;

  const rooms = [
    {
      name: "Forest cabin",
      img: NATURE.photos[4].thumb,
      guests: 4,
      price: 160,
      bed: dict.tplDemoKing,
      text: "Drvo od poda do plafona, kamin na drva i izlaz na deck sa pogledom na proplanak.",
      badges: [
        { Icon: IconFlame, label: dict.tplAmFire },
        { Icon: IconDroplet, label: dict.tplAmHotTub },
        { Icon: IconMountain, label: dict.tplDemoPatio },
      ],
    },
    {
      name: "Loft nest",
      img: NATURE.photos[5].thumb,
      guests: 2,
      price: 120,
      bed: dict.tplDemoQueen,
      text: "Galerija pod kosim krovom, krevet uz krovni prozor i zvezde bez svetlosnog zagađenja.",
      badges: [
        { Icon: IconStarNight, label: dict.tplActStars },
        { Icon: IconFlame, label: dict.tplAmHeat },
        { Icon: IconBike, label: dict.tplActBike },
      ],
    },
    {
      name: "Lake room",
      img: NATURE.photos[3].thumb,
      guests: 3,
      price: 140,
      bed: dict.tplDemoSofa,
      text: "Pogled na jezero, jutarnja magla iznad vode i čajnik na šporetu na drva.",
      badges: [
        { Icon: IconDroplet, label: dict.tplActLake },
        { Icon: IconLeaf, label: dict.tplAmGarden },
        { Icon: IconMountain, label: dict.tplDemoPatio },
      ],
    },
  ];

  const activities = [
    { name: "Ski-in / ski-out", img: NATURE.photos[6].thumb, duration: "Tornik · 40 min", text: "Skijaška staza počinje kod žičare, oprema se iznajmljuje u dolini." },
    { name: dict.tplActHike, img: NATURE.photos[1].thumb, duration: "6 km · 2 h", text: "Staza do vodopada Gostilje kreće odmah iza kuće, obeležena je i lagana." },
    { name: dict.tplActBike, img: NATURE.photos[11].thumb, duration: "18 km · 3 h", text: "Šumski trail kroz borovu šumu. Dva brdska bicikla stoje u šupi." },
  ];

  const seasons = [
    {
      name: "Winter Peak",
      months: "Dec – Feb",
      price: 220,
      Icon: IconSnowflake,
      perks: ["Drva za kamin uključena", "Džakuzi zagrejan pri dolasku", "Ski transfer do Tornika", `${dict.tplDemoMinStay}: 5 ${dict.tplDemoNights}`],
    },
    {
      name: "Summer Escape",
      months: "Jun – Sep",
      price: 170,
      Icon: IconSun,
      perks: ["Doručak sa imanja", "Bicikli i oprema za staze", "Roštilj i spoljna trpezarija", `${dict.tplDemoMinStay}: 3 ${dict.tplDemoNights}`],
    },
    {
      name: "Off-Season",
      months: "Mar – Maj, Okt – Nov",
      price: 120,
      Icon: IconLeaf,
      perks: ["Najtiši period u godini", "Fleksibilno otkazivanje", "Pozdravna korpa i čaj", `${dict.tplDemoMinStay}: 2 ${dict.tplDemoNights}`],
    },
  ];

  const filters: { id: PhotoCat | "all"; label: string }[] = [
    { id: "all", label: dict.tplDemoCatAll },
    { id: "exterior", label: dict.tplDemoCatExterior },
    { id: "interior", label: dict.tplDemoCatInterior },
    { id: "view", label: dict.tplDemoCatView },
  ];

  const gallery = useMemo(
    () => (filter === "all" ? NATURE.photos.slice(0, 6) : NATURE.photos.filter((photo) => photo.cat === filter).slice(0, 6)),
    [filter],
  );

  const activeSeason = seasons[season];
  // The 3x3 bento only tiles without gaps when the filter yields a full set.
  const bento = desktop && gallery.length === 6;

  return (
    <div className="overflow-x-clip bg-[#0F1E17] font-sans text-[#E8EFE9]">
      <SiteNav
        brand={
          <span className="inline-flex items-center gap-2 font-display text-lg font-semibold" style={{ color: OAK }}>
            <IconMountain className="h-5 w-5" /> JAVOR
          </span>
        }
        links={nav}
        ctaLabel={dict.tplDemoBook}
        onCta={() => scrollToId("nat-book")}
        menuLabel={dict.tplDemoMenu}
        closeLabel={dict.tplClose}
        barClass="border-b border-[#C29B38]/20 bg-[#0F1E17]/90 backdrop-blur-md"
        linkClass="font-semibold text-[#E8EFE9]/70 hover:text-[#C29B38]"
        ctaClass="rounded-full border border-[#C29B38] text-[11px] font-bold uppercase tracking-wide text-[#C29B38]"
        drawerClass="bg-[#0F1E17] text-[#E8EFE9]"
      />

      <section className="py-6 vp-t:py-8">
        <Container>
          <div className="relative overflow-hidden rounded-2xl max-h-[380px] vp-t:max-h-[420px] vp-d:max-h-[460px]">
            <AspectMedia src={NATURE.hero} alt="Kuća Javor" ratio="aspect-[16/10]" eager />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E17] via-[#0F1E17]/30 to-[#0F1E17]/20" />

            <div className={`absolute right-3 top-3 flex gap-2 vp-d:right-5 vp-d:top-5 ${mobile ? "flex-col items-end" : ""}`}>
              <span
                className="inline-flex items-center gap-2 rounded-full border bg-[#0F1E17]/70 px-3 py-2 text-[11px] font-bold uppercase tracking-wide backdrop-blur-md"
                style={{ borderColor: `${OAK}66`, color: OAK }}
              >
                <IconMountain className="h-4 w-4" /> 1.200 m
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0F1E17]/70 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-[#E8EFE9] backdrop-blur-md">
                <IconSun className="h-4 w-4 text-[#C29B38]" /> Sunčano, 18°C
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 vp-d:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: OAK }}>
                Zlatibor · Srbija
              </p>
              <h1 className="mt-2 max-w-2xl font-display text-2xl font-semibold leading-[1.08] tracking-tight vp-t:text-3xl vp-d:text-4xl">
                Alpine Nature Resort
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#E8EFE9]/80">{dict.tplNatureAbout}</p>
            </div>
          </div>
        </Container>
      </section>

      <Section id="nat-overview">
        <div className="grid grid-cols-2 gap-3 vp-t:grid-cols-3 vp-d:grid-cols-5">
          {[
            { Icon: IconArea, n: "118 m²", l: dict.tplDemoOverview },
            { Icon: IconUsers, n: "8", l: dict.tplDemoSleeps },
            { Icon: IconBed, n: "3", l: dict.tplDemoRooms },
            { Icon: IconBath, n: "2", l: dict.tplDemoBaths },
            { Icon: IconMountain, n: "1.200 m", l: "n.v." },
          ].map((item) => (
            <div key={item.l} className="rounded-2xl border border-[#C29B38]/25 bg-[#16261C] p-4 text-center vp-d:p-6">
              <item.Icon className="mx-auto h-5 w-5 text-[#C29B38]" />
              <div className="mt-2 font-display text-xl font-semibold vp-d:text-2xl">{item.n}</div>
              <div className="mt-1 truncate text-[11px] text-[#E8EFE9]/50">{item.l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="nat-rooms" className="bg-[#16261C]/70">
        <SectionHead
          eyebrow={dict.tplDemoUnits}
          title="Tri smeštajne jedinice u istom dvorištu"
          lead="Sve jedinice dele džakuzi, saunu i vatru na otvorenom. Cene su noćne, van sezone."
          eyebrowClass="text-[#C29B38]"
          leadClass="text-[#E8EFE9]/70"
        />
        {mobile ? (
          <SnapRow className="mt-8">
            {rooms.map((room) => (
              <SnapCard key={room.name} className="overflow-hidden rounded-2xl border border-[#C29B38]/25 bg-[#0F1E17]">
                <AspectMedia src={room.img} alt={room.name} ratio="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">{room.name}</h3>
                    <span className="shrink-0 font-display text-lg" style={{ color: OAK }}>
                      {room.price}€
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#E8EFE9]/80">{room.text}</p>
                  <button
                    type="button"
                    onClick={() => scrollToId("nat-book")}
                    className="mt-5 flex min-h-12 w-full shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#0F1E17]"
                    style={{ backgroundColor: OAK }}
                  >
                    {dict.tplDemoReserve}
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
                className="flex flex-col overflow-hidden rounded-2xl border border-[#C29B38]/25 bg-[#0F1E17] transition-all duration-300 vp-d:hover:-translate-y-1"
              >
                <AspectMedia src={room.img} alt={room.name} ratio="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-5 vp-d:p-6">
                  <div className="flex min-h-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold">{room.name}</h3>
                      <span className="shrink-0 font-display text-lg" style={{ color: OAK }}>
                        {room.price}€
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#E8EFE9]/50">
                      {room.guests} {dict.tplDemoSleeps} · {room.bed}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#E8EFE9]/80">{room.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {room.badges.map((badge) => (
                        <li
                          key={badge.label}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#C29B38]/25 px-3 py-1.5 text-[11px] font-semibold"
                        >
                          <badge.Icon className="h-3.5 w-3.5 text-[#C29B38]" />
                          {badge.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollToId("nat-book")}
                    className="mt-5 flex min-h-12 w-full shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#0F1E17]"
                    style={{ backgroundColor: OAK }}
                  >
                    {dict.tplDemoReserve}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section id="nat-activities">
        <SectionHead
          eyebrow={dict.tplDemoActivities}
          title="Šta se radi kad izađeš iz kuće"
          eyebrowClass="text-[#C29B38]"
          leadClass="text-[#E8EFE9]/70"
        />
        {mobile ? (
          <SnapCarousel className="mt-6" dotClass="bg-[#C29B38]">
            {activities.map((act) => (
              <article key={act.name} className="overflow-hidden rounded-2xl border border-[#C29B38]/25 bg-[#16261C]">
                <AspectMedia src={act.img} alt={act.name} ratio="aspect-[16/10]" />
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: OAK }}>
                    {act.duration}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold">{act.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#E8EFE9]/75">{act.text}</p>
                </div>
              </article>
            ))}
          </SnapCarousel>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-5 vp-d:grid-cols-3">
            {activities.map((act, i) => (
              <article
                key={act.name}
                className={`tpl-img-zoom group relative min-h-[220px] max-h-[320px] overflow-hidden rounded-2xl ${!desktop && i === 2 ? "col-span-2" : ""}`}
              >
                <Photo src={act.img} alt={act.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E17] via-[#0F1E17]/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6 vp-d:p-8">
                  <span
                    className="mb-2 inline-flex w-fit rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wide"
                    style={{ borderColor: `${OAK}66`, color: OAK }}
                  >
                    {act.duration}
                  </span>
                  <h3 className="font-display text-xl font-semibold">{act.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#E8EFE9]/80">{act.text}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section id="nat-pricing" className="bg-[#16261C]/70">
        <SectionHead
          eyebrow={dict.tplDemoSeasonal}
          title="Cena po sezoni, bez skrivenih dodataka"
          eyebrowClass="text-[#C29B38]"
          leadClass="text-[#E8EFE9]/70"
        />
        {desktop ? (
          <div className="mt-8 grid grid-cols-3 gap-6">
            {seasons.map((item, i) => (
              <article
                key={item.name}
                className={`flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  i === 1 ? "border-transparent text-[#0F1E17]" : "border-[#C29B38]/25 bg-[#0F1E17]"
                }`}
                style={i === 1 ? { backgroundColor: OAK } : undefined}
              >
                <item.Icon className={`h-6 w-6 ${i === 1 ? "text-[#0F1E17]" : "text-[#C29B38]"}`} />
                <h3 className="mt-4 font-display text-xl font-semibold">{item.name}</h3>
                <p className={`text-[11px] font-bold uppercase tracking-wide ${i === 1 ? "text-[#0F1E17]/70" : "text-[#E8EFE9]/50"}`}>
                  {item.months}
                </p>
                <p className="mt-4 font-display text-4xl font-semibold">
                  {item.price}€
                  <span className={`ml-1 text-sm font-normal ${i === 1 ? "text-[#0F1E17]/70" : "text-[#E8EFE9]/50"}`}>
                    / {dict.tplDemoPerNight}
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {item.perks.map((perk) => (
                    <li key={perk} className="flex gap-2">
                      <span className={i === 1 ? "text-[#0F1E17]" : ""} style={i === 1 ? undefined : { color: OAK }}>
                        ✓
                      </span>
                      <span className={i === 1 ? "text-[#0F1E17]/85" : "text-[#E8EFE9]/75"}>{perk}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => scrollToId("nat-book")}
                  className={`mt-5 flex min-h-12 w-full shrink-0 items-center justify-center rounded-full text-sm font-bold ${i === 1 ? "bg-[#0F1E17] text-[#E8EFE9]" : ""}`}
                  style={i === 1 ? undefined : { border: `1px solid ${OAK}`, color: OAK }}
                >
                  {dict.tplDemoCheckAvail}
                </button>
              </article>
            ))}
          </div>
        ) : (
          <>
            <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl border border-[#C29B38]/25 bg-[#0F1E17] p-1">
              {seasons.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setSeason(i)}
                  className="min-h-12 rounded-xl px-2 text-[11px] font-bold transition-colors"
                  style={season === i ? { backgroundColor: OAK, color: "#0F1E17" } : { color: "rgba(232,239,233,0.6)" }}
                >
                  {item.name.split(" ")[0]}
                </button>
              ))}
            </div>
            <article className="mt-4 rounded-2xl border border-[#C29B38]/25 bg-[#0F1E17] p-6">
              <activeSeason.Icon className="h-6 w-6 text-[#C29B38]" />
              <h3 className="mt-3 font-display text-xl font-semibold">{activeSeason.name}</h3>
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#E8EFE9]/50">{activeSeason.months}</p>
              <p className="mt-4 font-display text-4xl font-semibold">
                {activeSeason.price}€<span className="ml-1 text-sm font-normal text-[#E8EFE9]/50">/ {dict.tplDemoPerNight}</span>
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {activeSeason.perks.map((perk) => (
                  <li key={perk} className="flex gap-2 text-[#E8EFE9]/75">
                    <span style={{ color: OAK }}>✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => scrollToId("nat-book")}
                className="mt-6 min-h-12 w-full rounded-full text-sm font-bold text-[#0F1E17]"
                style={{ backgroundColor: OAK }}
              >
                {dict.tplDemoCheckAvail}
              </button>
            </article>
          </>
        )}
      </Section>

      <Section id="nat-gallery">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow={dict.tplDemoGallery} title="Kuća, šuma i vrhovi" eyebrowClass="text-[#C29B38]" />
          {!mobile && (
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  className="min-h-12 rounded-full border px-4 text-[11px] font-bold uppercase tracking-wide transition-colors"
                  style={
                    filter === item.id
                      ? { backgroundColor: OAK, borderColor: OAK, color: "#0F1E17" }
                      : { borderColor: "rgba(194,155,56,0.3)", color: "rgba(232,239,233,0.7)" }
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {mobile ? (
          <div className="relative mt-6">
            <AspectMedia src={gallery[shot % gallery.length].thumb} alt={gallery[shot % gallery.length].alt} ratio="aspect-[4/3]" className="rounded-2xl" />
            <span className="absolute right-3 top-3 rounded-full bg-[#0F1E17]/80 px-3 py-1 text-[11px] font-bold backdrop-blur-md" style={{ color: OAK }}>
              {(shot % gallery.length) + 1} / {gallery.length}
            </span>
            <div className="absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between">
              <button
                type="button"
                onClick={() => setShot((s) => (s + gallery.length - 1) % gallery.length)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F1E17]/70 backdrop-blur-md"
                aria-label="prev"
              >
                <IconChevron className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => setShot((s) => (s + 1) % gallery.length)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F1E17]/70 backdrop-blur-md"
                aria-label="next"
              >
                <IconChevron className="h-5 w-5" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setOpen(shot % gallery.length)}
              className="mt-3 min-h-12 w-full rounded-full border text-sm font-bold"
              style={{ borderColor: OAK, color: OAK }}
            >
              {dict.tplDemoViewAll}
            </button>
          </div>
        ) : (
          <div className={`mt-8 grid gap-4 ${bento ? "auto-rows-[190px] grid-cols-3" : desktop ? "grid-cols-3" : "grid-cols-2"}`}>
            {gallery.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setOpen(i)}
                className={`relative overflow-hidden rounded-2xl transition-all duration-300 vp-d:hover:-translate-y-1 ${
                  bento && i === 0 ? "col-span-2 row-span-2" : bento ? "" : "aspect-[4/3]"
                }`}
              >
                <Photo src={photo.thumb} alt={photo.alt} />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F1E17]/85 to-transparent px-4 pb-3 pt-10 text-left text-xs font-bold text-[#E8EFE9]">
                  {photo.alt}
                </span>
              </button>
            ))}
          </div>
        )}
      </Section>

      <Section id="nat-location" className="bg-[#16261C]/70">
        <SectionHead eyebrow={dict.tplDemoLocation} title="Javor bb, Zlatibor" eyebrowClass="text-[#C29B38]" />
        <div className="mt-8 grid grid-cols-1 gap-6 vp-dt:grid-cols-2">
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-[#C29B38]/25">
            <Photo src={NATURE.photos[2].thumb} alt="Zlatibor" />
            <div className="absolute inset-0 bg-[#0F1E17]/45" />
            <span
              className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ backgroundColor: OAK, boxShadow: "0 0 0 8px rgba(194,155,56,0.22)" }}
            />
          </div>
          <ul className="grid gap-3">
            {[
              { name: "Vodopad Gostilje", time: "15 min", km: "6 km" },
              { name: "Jezero Ribnica", time: "12 min", km: "4 km" },
              { name: "Tornik ski centar", time: "40 min", km: "18 km" },
              { name: "Centar Zlatibora", time: "18 min", km: "9 km" },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between gap-4 rounded-2xl border border-[#C29B38]/25 bg-[#0F1E17] px-4 py-4 text-sm"
              >
                <span className="inline-flex min-w-0 items-center gap-2">
                  <IconMapPin className="h-4 w-4 shrink-0 text-[#C29B38]" />
                  <span className="truncate font-semibold">{item.name}</span>
                </span>
                <span className="shrink-0 font-bold" style={{ color: OAK }}>
                  {item.time} · {item.km}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="nat-reviews">
        <SectionHead eyebrow={dict.tplDemoReviews} title="Gosti o kući" eyebrowClass="text-[#C29B38]" />
        <div className="mt-8 grid grid-cols-1 gap-4 vp-t:grid-cols-2 vp-d:grid-cols-3">
          {[
            { name: "Petar J.", date: "jan 2026", text: dict.tplNatureReview, avatar: AVATARS[3] },
            { name: "Claire M.", date: "dec 2025", text: "Hot tub in the fog, wood stove, zero signal stress. We hiked until dark every day.", avatar: AVATARS[2] },
            { name: "Miloš V.", date: "avg 2025", text: "Deca na stazi, mi na decku. Kuća miriše na bor i kafu, a noću se vide sve zvezde.", avatar: AVATARS[1] },
          ].map((item) => (
            <article key={item.name} className="rounded-2xl border border-[#C29B38]/25 bg-[#16261C] p-5 vp-d:p-6">
              <div className="flex items-center gap-3">
                <Avatar src={item.avatar} alt={item.name} size="h-12 w-12" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-bold">{item.name}</div>
                  <div className="text-[11px] text-[#E8EFE9]/50">{item.date}</div>
                </div>
              </div>
              <div className="mt-3" style={{ color: OAK }}>
                <Stars rating={5} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#E8EFE9]/80">“{item.text}”</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="nat-book" className="bg-[#16261C]/70">
        <div className="grid grid-cols-1 gap-6 vp-d:grid-cols-[1fr_340px]">
          <div className="rounded-2xl border border-[#C29B38]/25 bg-[#0F1E17] p-6 vp-d:p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight vp-d:text-3xl">{dict.tplDemoInquiry}</h2>
            <p className="mt-2 text-sm text-[#E8EFE9]/70">Odgovaramo do 22h, svakog dana u godini.</p>
            <div className="mt-6">
              <InquiryForm
                dict={dict}
                accentClass="text-[#C29B38]"
                inputClass="rounded-xl border border-[#C29B38]/25 bg-[#16261C] text-sm outline-none"
                buttonClass="rounded-full text-sm font-bold text-[#0F1E17] [background-color:#C29B38]"
              />
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-[#C29B38]/25 bg-[#0F1E17] p-6 vp-d:sticky vp-d:top-24">
            <p className="text-[11px] font-bold uppercase tracking-wide text-[#E8EFE9]/50">{dict.tplDemoFrom}</p>
            <p className="font-display text-4xl font-semibold" style={{ color: OAK }}>
              120€
            </p>
            <p className="text-sm text-[#E8EFE9]/60">{dict.tplDemoPerNight}</p>
            <a
              href="https://wa.me/381677747710"
              className="mt-5 flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full text-sm font-bold text-[#0F1E17]"
              style={{ backgroundColor: OAK }}
            >
              <IconWhatsApp className="h-6 w-6" />
              {dict.tplDemoWhatsApp}
            </a>
            <a
              href="tel:+38131000000"
              className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-full border text-sm font-bold"
              style={{ borderColor: OAK, color: OAK }}
            >
              <IconPhone className="h-4 w-4" /> {dict.tplDemoCall}
            </a>
          </aside>
        </div>
      </Section>

      <footer className="border-t border-[#C29B38]/20 py-12">
        <Container>
          <div className="grid grid-cols-1 gap-8 vp-dt:grid-cols-3">
            <div>
              <div className="inline-flex items-center gap-2 font-display text-lg font-semibold" style={{ color: OAK }}>
                <IconMountain className="h-5 w-5" /> JAVOR
              </div>
              <p className="mt-3 text-sm text-[#E8EFE9]/60">Javor bb, Zlatibor</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-[#E8EFE9]/60">
                <IconPhone className="h-4 w-4" /> +381 31 000 000
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-wide" style={{ color: OAK }}>
                {dict.tplDemoPolicies}
              </h3>
              <p className="mt-3 text-sm text-[#E8EFE9]/60">
                {dict.tplDemoCheckIn} 16:00 · {dict.tplDemoCheckOut} 10:00
              </p>
            </div>
            <div>
              <p className="inline-flex items-center gap-2 text-sm text-[#E8EFE9]/60">
                <IconMail className="h-4 w-4" /> stay@javor.rs
              </p>
              <div className="mt-3" style={{ color: OAK }}>
                <IconInstagram className="h-5 w-5" />
              </div>
              <p className="mt-6 text-[11px] text-[#E8EFE9]/35">© 2026 Kuća Javor</p>
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
