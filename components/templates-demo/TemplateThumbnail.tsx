import type { ReactNode } from "react";
import { BOUTIQUE, GLAMPING, LUXURY, NATURE, URBAN } from "./photos";
import type { TemplateId } from "./types";

function Chrome({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="flex h-full flex-col bg-[#1a1a1a]">
      <div className="flex h-6 flex-none items-center gap-1.5 bg-[#2a2a2a] px-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
        <span className="ml-1 min-w-0 flex-1 truncate rounded-full bg-black/40 px-2 py-0.5 text-center text-[8px] text-white/50">
          {url}
        </span>
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

function ShotNav({
  brand,
  cta,
  barClass,
  ctaClass,
}: {
  brand: ReactNode;
  cta: string;
  barClass: string;
  ctaClass: string;
}) {
  return (
    <div className={`flex h-[18px] flex-none items-center justify-between gap-2 px-2 ${barClass}`}>
      <div className="min-w-0 truncate">{brand}</div>
      <span className={`shrink-0 rounded-full px-1.5 py-[3px] text-[6px] font-bold leading-none ${ctaClass}`}>{cta}</span>
    </div>
  );
}

function ShotImg({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
  );
}

export default function TemplateThumbnail({ id }: { id: TemplateId }) {
  switch (id) {
    case "luxury":
      return (
        <Chrome url="villaaurora.me">
          <div className="flex h-full flex-col bg-[#FBF9F5]">
            <ShotNav
              brand={<span className="font-display text-[7px] tracking-[0.22em] text-[#1B365D]">AURORA</span>}
              cta="Rezerviši"
              barClass="border-b border-[#E8DFD8] bg-[#FBF9F5]"
              ctaClass="bg-[#1B365D] text-white"
            />
            <div className="grid min-h-0 flex-1 grid-cols-2">
              <div className="flex flex-col justify-center px-2.5">
                <div className="text-[5px] font-semibold uppercase tracking-[0.16em] text-[#1B365D]/70">Luštica Bay</div>
                <div className="mt-0.5 font-display text-[12px] leading-[1.05] text-[#1C2024]">The Grand Villa</div>
                <div className="mt-1.5 w-fit rounded-full bg-[#1B365D] px-2 py-0.5 text-[6px] font-bold text-white">
                  Rezerviši vilu
                </div>
              </div>
              <div className="relative min-h-0">
                <ShotImg src={LUXURY.hero} />
              </div>
            </div>
          </div>
        </Chrome>
      );
    case "boutique":
      return (
        <Chrome url="kucalipa.rs">
          <div className="flex h-full flex-col bg-[#FDFBF7]">
            <ShotNav
              brand={<span className="font-display text-[8px] font-semibold text-[#C87D55]">Kuća Lipa</span>}
              cta="Rezerviši"
              barClass="bg-[#FDFBF7] shadow-[0_1px_0_rgba(44,34,30,0.08)]"
              ctaClass="bg-[#C87D55] text-white"
            />
            <div className="relative min-h-0 flex-1">
              <ShotImg src={BOUTIQUE.hero} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-2">
                <span className="rounded-full bg-white/90 px-1.5 py-0.5 text-[6px] font-bold text-[#C87D55]">Superhost 4.92</span>
                <div className="mt-1 font-display text-[12px] leading-tight text-white">Cozy Hideaway</div>
              </div>
            </div>
          </div>
        </Chrome>
      );
    case "urban":
      return (
        <Chrome url="metroloft.rs">
          <div className="flex h-full flex-col bg-slate-900">
            <div className="bg-blue-600 px-2 py-[3px] text-[6px] font-bold text-white">Direktno −15% vs Airbnb</div>
            <ShotNav
              brand={<span className="text-[7px] font-black tracking-tight text-white">METRO LOFT</span>}
              cta="Rezerviši"
              barClass="border-b border-white/10 bg-slate-900"
              ctaClass="rounded-md bg-blue-600 text-white"
            />
            <div className="grid min-h-0 flex-1 grid-cols-2">
              <div className="flex flex-col justify-center px-2.5">
                <div className="text-[5px] font-bold uppercase tracking-wide text-blue-300">Stari Grad</div>
                <div className="mt-0.5 text-[11px] font-black leading-[1.05] text-white">Plati sajtu.</div>
                <div className="text-[10px] font-black leading-tight text-white">Preskoči proviziju.</div>
                <div className="mt-1.5 text-[11px] font-black text-blue-400">120€</div>
              </div>
              <div className="relative min-h-0">
                <ShotImg src={URBAN.hero} />
              </div>
            </div>
          </div>
        </Chrome>
      );
    case "nature":
      return (
        <Chrome url="javor.zlatibor">
          <div className="flex h-full flex-col bg-[#0F1E17]">
            <ShotNav
              brand={<span className="font-display text-[8px] font-semibold text-[#C29B38]">JAVOR</span>}
              cta="Rezerviši"
              barClass="border-b border-[#C29B38]/20 bg-[#0F1E17]"
              ctaClass="border border-[#C29B38] text-[#C29B38]"
            />
            <div className="relative min-h-0 flex-1">
              <ShotImg src={NATURE.hero} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E17] via-[#0F1E17]/25 to-[#0F1E17]/20" />
              <span className="absolute right-1.5 top-1.5 rounded-full border border-[#C29B38]/40 bg-[#0F1E17]/70 px-1.5 py-0.5 text-[6px] font-bold text-[#C29B38]">
                1.200 m
              </span>
              <div className="absolute inset-x-0 bottom-0 p-2">
                <div className="text-[5px] font-bold uppercase tracking-[0.18em] text-[#C29B38]">Zlatibor</div>
                <div className="font-display text-[12px] leading-tight text-white">Alpine Nature Resort</div>
              </div>
            </div>
          </div>
        </Chrome>
      );
    case "glamping":
      return (
        <Chrome url="lunacamp.rs">
          <div className="flex h-full flex-col bg-[#F7F4EF]">
            <ShotNav
              brand={<span className="font-display text-[8px] font-semibold text-[#C4703F]">Luna Camp</span>}
              cta="Rezerviši"
              barClass="bg-[#F7F4EF] shadow-[0_1px_0_rgba(58,53,47,0.08)]"
              ctaClass="bg-[#C4703F] text-white"
            />
            <div className="flex min-h-0 flex-1 flex-col px-2 pb-1.5 pt-1">
              <div className="text-center text-[8px] font-semibold leading-tight text-[#3A352F]">
                Spavaj pod platnom, budi se pod hrastovima
              </div>
              <div className="mt-1 flex justify-center gap-2">
                {[GLAMPING.photos[5].thumb, GLAMPING.photos[10].thumb, GLAMPING.photos[4].thumb, GLAMPING.photos[9].thumb].map(
                  (src) => (
                    <span
                      key={src}
                      className="relative h-7 w-7 overflow-hidden rounded-full p-[1.5px]"
                      style={{ background: "linear-gradient(135deg, #C4703F, #7C8B6F)" }}
                    >
                      <span className="relative block h-full w-full overflow-hidden rounded-full ring-1 ring-[#F7F4EF]">
                        <ShotImg src={src} />
                      </span>
                    </span>
                  ),
                )}
              </div>
              <div className="relative mt-1 min-h-0 flex-1 overflow-hidden rounded-lg">
                <ShotImg src={GLAMPING.hero} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A352F]/55 to-transparent" />
                <div className="absolute bottom-1 left-1.5 font-display text-[10px] text-white">Luna Camp</div>
              </div>
            </div>
          </div>
        </Chrome>
      );
  }
}
