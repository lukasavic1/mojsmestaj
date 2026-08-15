"use client";

import { useState } from "react";
import { IconClose, IconChevron } from "./icons";
import type { DemoPhoto } from "./photos";

export function Photo({
  src,
  alt,
  className = "",
  eager = false,
  fit = "cover",
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  fit?: "cover" | "contain";
  onClick?: () => void;
}) {
  const [ok, setOk] = useState(true);
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  if (!ok) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900 ${className}`} aria-hidden />
    );
  }

  return (
    // External Unsplash URLs inside a scaled preview frame; native img avoids next/image layout issues.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      onError={() => setOk(false)}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      onDragStart={(event) => event.preventDefault()}
      className={`absolute inset-0 h-full w-full ${fitClass} ${onClick ? "cursor-zoom-in" : ""} ${className}`}
    />
  );
}

export function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
  closeLabel,
}: {
  photos: DemoPhoto[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  closeLabel: string;
}) {
  const photo = photos[index];
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/92" role="dialog" aria-modal="true">
      <div className="flex items-center justify-between px-3 py-2 text-white">
        <span className="truncate text-xs">
          {index + 1} / {photos.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"
        >
          <IconClose className="h-5 w-5" />
        </button>
      </div>
      <div className="relative min-h-0 flex-1">
        <Photo src={photo.src} alt={photo.alt} fit="contain" eager />
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white"
          aria-label="prev"
        >
          <IconChevron className="h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white"
          aria-label="next"
        >
          <IconChevron className="h-5 w-5" />
        </button>
      </div>
      <p className="px-4 py-3 text-center text-xs text-white/80">{photo.alt}</p>
    </div>
  );
}
