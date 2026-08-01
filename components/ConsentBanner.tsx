"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "../lib/dictionaries";
import { readConsent, writeConsent } from "../lib/consent";

export default function ConsentBanner({ dict }: { dict: Dictionary }) {
  const [visible, setVisible] = useState(false);

  // Decide after mount: the stored choice lives in a cookie the server-rendered
  // markup cannot see, and guessing would flash the banner at people who
  // already answered.
  useEffect(() => {
    if (readConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  function choose(choice: "granted" | "denied") {
    writeConsent(choice);
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={dict.cookieTitle}
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex max-w-[1140px] flex-col gap-4 rounded-xl2 border border-sea/10 bg-paper p-5 shadow-[0_8px_30px_rgba(27,58,75,0.18)] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
        <div>
          <div className="mb-1 text-[15px] font-semibold text-sea">{dict.cookieTitle}</div>
          <p className="text-[13.5px] leading-relaxed text-ink-soft">{dict.cookieText}</p>
        </div>

        {/* Refusing has to be exactly as easy as accepting, so both are plain
            buttons of the same size rather than a primary and a faint link. */}
        <div className="flex flex-none gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="flex-1 whitespace-nowrap rounded-full border-[1.5px] border-sea/25 px-5 py-3 text-[14px] font-bold text-sea transition-colors hover:border-sea/50 sm:flex-none"
          >
            {dict.cookieReject}
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="flex-1 whitespace-nowrap rounded-full bg-roof px-5 py-3 text-[14px] font-bold text-paper transition-colors hover:bg-roof-dark sm:flex-none"
          >
            {dict.cookieAccept}
          </button>
        </div>
      </div>
    </div>
  );
}
