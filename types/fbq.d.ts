// Meta Pixel global, defined by the base code in components/MetaPixel.tsx.
// Optional because it is absent until that script runs, when no pixel ID is
// configured, and whenever an ad blocker strips it.
type Fbq = {
  (command: "init", pixelId: string, userData?: Record<string, unknown>): void;
  (command: "track", event: string, params?: Record<string, unknown>): void;
  (command: "trackCustom", event: string, params?: Record<string, unknown>): void;
  (command: "consent", action: "grant" | "revoke"): void;
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
  push: Fbq;
};

interface Window {
  fbq?: Fbq;
  _fbq?: Fbq;
}
