import type { TemplateId } from "../components/templates-demo/types";
import { isTemplateId } from "../components/templates-demo/types";

export const TEMPLATE_SELECTED_EVENT = "svojsmestaj:template-selected";
export const TEMPLATE_PARAM = "template";

export function applyTemplateSelection(id: TemplateId) {
  const url = new URL(window.location.href);
  url.searchParams.set(TEMPLATE_PARAM, id);
  window.history.replaceState({}, "", `${url.pathname}${url.search}#kontakt`);
  window.dispatchEvent(new Event(TEMPLATE_SELECTED_EVENT));
  document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
}

export function readSelectedTemplateId(): TemplateId | null {
  if (typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get(TEMPLATE_PARAM);
  return isTemplateId(value) ? value : null;
}
