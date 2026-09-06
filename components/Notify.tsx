import type { Dictionary } from "../lib/dictionaries";

// Official WhatsApp glyph, drawn in white so it sits on the green app tile.
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-1/2 w-1/2 text-white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.884 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

// Official Gmail "M" envelope logo (Google's five-piece mark).
function GmailIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-1/2 w-1/2">
      <path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z" />
      <path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z" />
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
      <path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859A3.998 3.998 0 0 0 7.298 8C4.924 8 3 9.924 3 12.298z" />
      <path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A3.998 3.998 0 0 1 40.702 8C43.076 8 45 9.924 45 12.298z" />
    </svg>
  );
}

export default function Notify({ dict }: { dict: Dictionary }) {
  const items = [
    { title: dict.notify1Title, text: dict.notify1Text },
    { title: dict.notify2Title, text: dict.notify2Text },
    { title: dict.notify3Title, text: dict.notify3Text },
  ];

  return (
    <section className="px-6 py-16" id="obavestenja">
      <div className="mx-auto grid max-w-[1140px] items-center gap-11 md:grid-cols-2">
        {/* Copy */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.notifyEyebrow}
          </div>
          <h2 className="mb-4 max-w-[520px] font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.notifyTitle}
          </h2>
          <p className="mb-7 max-w-[500px] text-[15px] leading-relaxed text-ink-soft">
            {dict.notifyText}
          </p>
          <ul>
            {items.map((item, i) => (
              <li key={i} className={`flex gap-3.5 py-4 ${i !== 0 ? "border-t border-sea/10" : ""}`}>
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-sand-deep">
                  <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px] text-roof">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-sea">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Animated visual */}
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[28px] bg-sea p-8">
          {/* soft background glows */}
          <div className="notify-glow pointer-events-none absolute left-6 top-10 h-40 w-40 rounded-full bg-[#25D366]/20 blur-2xl" />
          <div className="notify-glow pointer-events-none absolute bottom-8 right-8 h-44 w-44 rounded-full bg-sun/25 blur-2xl [animation-delay:1.5s]" />

          {/* the reservation card that triggers everything */}
          <div className="relative z-10 w-full max-w-[280px] rounded-2xl bg-paper p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-roof/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-roof">
                <span className="relative flex h-2 w-2">
                  <span className="notify-ping absolute inline-flex h-full w-full rounded-full bg-roof/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-roof" />
                </span>
                {dict.notifyCardTitle}
              </span>
              <span className="text-[11px] text-ink-soft">{dict.notifyCardTime}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sea text-sm font-bold text-paper">
                M
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-sea">{dict.notifyCardName}</div>
                <div className="mt-1 flex gap-1.5">
                  <span className="rounded-full bg-[#25D366] px-2 py-0.5 text-[10px] font-semibold text-white">
                    {dict.notifyWaLabel}
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-ink-soft">{dict.notifyEmailLabel}</div>
              </div>
            </div>
          </div>

          {/* floating WhatsApp tile */}
          <div className="notify-float-a absolute left-4 top-6 z-20 sm:left-8 sm:top-10">
            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-[20px] bg-[#25D366] shadow-[0_18px_40px_-8px_rgba(37,211,102,0.7)] sm:h-[92px] sm:w-[92px]">
              <WhatsAppIcon />
            </div>
          </div>

          {/* floating Gmail tile */}
          <div className="notify-float-b absolute bottom-6 right-4 z-20 sm:bottom-10 sm:right-8">
            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-[20px] bg-white shadow-[0_18px_40px_-8px_rgba(0,0,0,0.45)] sm:h-[92px] sm:w-[92px]">
              <GmailIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
