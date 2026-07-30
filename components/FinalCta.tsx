import type { Dictionary } from "../lib/dictionaries";
import { getContactLinks } from "../lib/links";

export default function FinalCta({ dict }: { dict: Dictionary }) {
  const links = getContactLinks(dict.waMsg);

  return (
    <section className="px-6 py-16" id="kontakt">
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-[28px] bg-roof px-6 py-14 text-center text-paper sm:px-11">
          <h2 className="mx-auto max-w-[560px] font-display text-[26px] font-semibold sm:text-[32px] lg:text-[36px]">
            {dict.finalTitle}
          </h2>
          <p className="mx-auto mt-3.5 max-w-[480px] text-base text-paper/85">{dict.finalText}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <a
              href={links.whatsapp}
              className="inline-flex items-center gap-2 rounded-full bg-sea px-6 py-4 text-[15px] font-bold text-paper transition-colors hover:bg-sea-light"
            >
              {dict.finalBtnWA}
            </a>
            <a
              href={links.telegram}
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-paper px-6 py-4 text-[15px] font-bold text-paper transition-colors hover:bg-paper hover:text-roof"
            >
              {dict.finalBtnTG}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
