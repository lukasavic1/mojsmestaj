"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IconChevron, IconClose } from "./templates-demo/icons";

export type GalleryLabels = {
  alt: string;
  close: string;
  prev: string;
  next: string;
};

export default function StoryGallery({ images, labels }: { images: string[]; labels: GalleryLabels }) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const count = images.length;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + count) % count)),
    [count],
  );

  useEffect(() => {
    if (active === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active === null, close, step]);

  const navButton =
    "absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-paper transition-colors hover:bg-white/20 sm:inline-flex";

  return (
    <>
      <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:mx-auto md:grid md:max-w-[860px] md:grid-cols-3 md:overflow-visible md:px-0">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className="w-[62%] flex-none cursor-zoom-in snap-center overflow-hidden rounded-xl2 border border-sea/10 bg-sea shadow-sm transition-transform hover:-translate-y-1 sm:w-[40%] md:w-auto"
          >
            <img
              src={src}
              alt={`${labels.alt} ${i + 1}`}
              width={720}
              height={1280}
              loading="lazy"
              className="aspect-[9/16] h-auto w-full object-cover"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-[#13232e]/95 p-4 pt-16 pb-12 backdrop-blur-sm sm:px-20"
          role="dialog"
          aria-modal="true"
          aria-label={`${labels.alt} ${active + 1}`}
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-paper/80 transition-colors hover:bg-white/10 hover:text-paper"
            aria-label={labels.close}
          >
            <IconClose className="h-6 w-6" />
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className={`${navButton} left-4`}
                aria-label={labels.prev}
              >
                <IconChevron className="h-6 w-6 rotate-180" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className={`${navButton} right-4`}
                aria-label={labels.next}
              >
                <IconChevron className="h-6 w-6" />
              </button>
            </>
          )}

          <img
            key={images[active]}
            src={images[active]}
            alt={`${labels.alt} ${active + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-xl2 object-contain shadow-2xl animate-[tpl-fade_.2s_ease-out]"
          />

          {count > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-paper/70">
              {active + 1} / {count}
            </div>
          )}
        </div>
      )}
    </>
  );
}
