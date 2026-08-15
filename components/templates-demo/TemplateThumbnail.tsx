import type { ReactNode } from "react";
import { BOUTIQUE, GLAMPING, LUXURY, NATURE, URBAN } from "./photos";
import type { TemplateId } from "./types";

function Chrome({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
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

export default function TemplateThumbnail({ id }: { id: TemplateId }) {
  switch (id) {
    case "luxury":
      return (
        <Chrome url="villaaurora.me">
          <div className="flex h-full bg-[#FBF9F5]">
            <div className="flex w-[46%] flex-col justify-end p-2">
              <div className="font-display text-[8px] tracking-[0.28em] text-[#1B365D]">AURORA</div>
              <div className="mt-1 font-display text-[13px] leading-tight text-[#1C2024]">The Grand Villa</div>
              <div className="mt-2 rounded-full bg-[#1B365D] py-1 text-center text-[7px] font-bold text-white">Rezerviši</div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LUXURY.hero} alt="" className="h-full w-[54%] object-cover" />
          </div>
        </Chrome>
      );
    case "boutique":
      return (
        <Chrome url="kucalipa.rs">
          <div className="grid h-full grid-cols-2 bg-[#F3E6D4]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BOUTIQUE.hero} alt="" className="h-full w-full object-cover" />
            <div className="flex flex-col justify-end p-2">
              <div className="font-display text-[12px] leading-tight text-[#3D2C21]">Cozy Hideaway</div>
              <div className="mt-1 rounded-2xl bg-white p-1.5 shadow-sm">
                <div className="text-[7px] font-bold text-[#8A7366]">95€ / noć</div>
                <div className="mt-1 rounded-full bg-[#C87D55] py-1 text-center text-[7px] font-bold text-white">Proveri termin</div>
              </div>
            </div>
          </div>
        </Chrome>
      );
    case "urban":
      return (
        <Chrome url="metroloft.rs">
          <div className="flex h-full flex-col bg-slate-900">
            <div className="bg-blue-600 px-2 py-0.5 text-[6px] font-bold text-white">Direktno −15% vs Airbnb</div>
            <div className="flex min-h-0 flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={URBAN.hero} alt="" className="h-full w-[55%] object-cover" />
              <div className="flex flex-1 flex-col justify-between p-2">
                  <div className="text-[7px] font-extrabold uppercase tracking-widest text-blue-400">Direktna cena</div>
                  <div>
                    <div className="text-[18px] font-black text-white">120€</div>
                    <div className="text-[8px] text-slate-400">/ noć</div>
                    <div className="mt-1 rounded-lg bg-blue-600 py-1 text-center text-[7px] font-black text-white">Rezerviši</div>
                  </div>
              </div>
            </div>
          </div>
        </Chrome>
      );
    case "nature":
      return (
        <Chrome url="javor.zlatibor">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={NATURE.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#0F1E17]/50" />
          <div className="absolute right-2 top-2 flex flex-col items-end gap-1">
            <span className="rounded-full bg-[#C29B38] px-1.5 py-0.5 text-[7px] font-bold text-[#0F1E17]">1.200 m</span>
            <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[7px] font-bold text-white">Sunčano 18°</span>
          </div>
          <div className="absolute bottom-2 left-2 font-display text-[15px] text-white">Alpine Resort</div>
        </Chrome>
      );
    case "glamping":
      return (
        <Chrome url="lunacamp.rs">
          <div className="flex h-full flex-col bg-[#F7F4EF]">
            <div className="flex gap-1 px-2 pt-1.5">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="h-4 w-4 rounded-full bg-gradient-to-br from-[#C4703F] to-[#7C8B6F] ring-1 ring-[#F7F4EF]" />
              ))}
            </div>
            <div className="relative mx-1.5 mt-1.5 min-h-0 flex-1 overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={GLAMPING.hero} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A352F]/80 to-transparent" />
              <div className="absolute bottom-1 left-2 font-display text-[12px] text-white">Luna Camp</div>
            </div>
            <div className="flex justify-center py-1.5">
              <span className="rounded-full bg-[#C4703F] px-2 py-0.5 text-[7px] font-bold text-white">Book · od 140€</span>
            </div>
          </div>
        </Chrome>
      );
  }
}
