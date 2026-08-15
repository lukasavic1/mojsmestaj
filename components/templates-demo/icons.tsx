import type { ReactNode } from "react";

type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {children}
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconMonitor({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconTablet({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="17.5" r="0.9" fill="currentColor" />
    </Svg>
  );
}

export function IconSmartphone({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.2 7.2 18.4l.9-5.4L4.2 9.2l5.4-.8L12 3.5z"
        fill="currentColor"
      />
    </Svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </Svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 19a5.5 5.5 0 0111 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 19a4.5 4.5 0 014.5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconWifi({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12.5a9 9 0 0114 0M8 15.2a5 5 0 018 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="18.2" r="1.1" fill="currentColor" />
    </Svg>
  );
}

export function IconPool({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 9h16M6 9V7a2 2 0 012-2h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 15c1.5 1.2 3.5 1.2 5 0s3.5-1.2 5 0 3.5 1.2 5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 19c1.5 1.2 3.5 1.2 5 0s3.5-1.2 5 0 3.5 1.2 5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconKitchen({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 4v7M8 8h3a3 3 0 003-3V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 13h14v7H5z" stroke="currentColor" strokeWidth="1.8" />
    </Svg>
  );
}

export function IconChef({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 3.5c-1.7 0-3.1.9-3.7 2.2A3.4 3.4 0 004.2 9.2C4.2 11.3 5.9 13 8 13h8c2.1 0 3.8-1.7 3.8-3.8a3.4 3.4 0 00-4.1-3.3C15.1 4.4 13.7 3.5 12 3.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M8 13v5.5h8V13" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 20.5h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconParking({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 17V7h4.2a3.2 3.2 0 010 6.4H9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconFlame({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 3s2 3 2 5.5S12.8 12 12 12s-1.2-1-1.5-2.5C10 7 12 3 12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M8 13a4.5 4.5 0 108 2.2c0-2.4-2-4-4-5.7-1.6 1.4-4 3.2-4 3.5z" stroke="currentColor" strokeWidth="1.8" />
    </Svg>
  );
}

export function IconLeaf({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 19c8-1 13-8 14-14-7 1-13 7-14 14z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 15c2-2 5-5 8-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconCalendar({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`block shrink-0 ${className ?? ""}`} aria-hidden>
      <g transform="translate(12 12) scale(0.88) translate(-12 -12)">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </g>
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M8 3.5h2.2l.8 2.2-1.4 1.4a12 12 0 007.3 7.3l1.4-1.4 2.2.8V16a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 013.5 8 1.5 1.5 0 015 6.5H8V3.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconSnowflake({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3v18M5 6.5l14 11M5 17.5l14-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconSun({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconBike({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="6.5" cy="16" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="16" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6.5 16l4-8h4.5l2.5 8M10.5 8l2 8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconMountain({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 19l6.5-11 3.5 6 2-3.5L21 19H3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconStarNight({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 4l1.2 3.6L17 9l-3.8 1.4L12 14l-1.2-3.6L7 9l3.8-1.4L12 4z" fill="currentColor" />
      <path d="M18 14l.7 1.8L20.5 17l-1.8.6L18 19.5l-.7-1.9-1.8-.6 1.8-.6L18 14z" fill="currentColor" />
    </Svg>
  );
}

export function IconDroplet({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3s6 7 6 11a6 6 0 11-12 0c0-4 6-11 6-11z" stroke="currentColor" strokeWidth="1.8" />
    </Svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconTv({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 21h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconWasher({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 6h.01M10.5 6h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </Svg>
  );
}

export function IconChevron({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconPlay({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 8.5v7l6-3.5-6-3.5z" fill="currentColor" />
    </Svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" />
    </Svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconBed({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 18V9.5A2.5 2.5 0 016.5 7H12a3 3 0 013 3v2h5v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 18h18M6 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconBath({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 13h14v2a4 4 0 01-4 4H9a4 4 0 01-4-4v-2z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 13V8.5A2.5 2.5 0 019.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function IconArea({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8h3M8 8v3M16 16h-3M16 16v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className ?? ""}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <IconStar
          key={i}
          className={`h-3.5 w-3.5 ${i < Math.round(rating) ? "text-current" : "opacity-25"}`}
        />
      ))}
    </span>
  );
}
