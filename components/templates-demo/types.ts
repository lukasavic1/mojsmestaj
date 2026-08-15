import type { ComponentType } from "react";
import type { Dictionary } from "../../lib/dictionaries";

export const TEMPLATE_IDS = ["luxury", "boutique", "urban", "nature", "glamping"] as const;

export type TemplateId = (typeof TEMPLATE_IDS)[number];

export type Viewport = "desktop" | "tablet" | "mobile";

export const TEMPLATE_ACCENTS: Record<TemplateId, string> = {
  luxury: "#C9A96A",
  boutique: "#C4785A",
  urban: "#0B0F14",
  nature: "#2D4A3E",
  glamping: "#C45C26",
};

export interface TemplateCopy {
  name: string;
  tag: string;
  tagline: string;
  desc: string;
}

export interface TemplateItem {
  id: TemplateId;
  accent: string;
  Demo: ComponentType<{ dict: Dictionary }>;
}

export function isTemplateId(value: string | null | undefined): value is TemplateId {
  return !!value && (TEMPLATE_IDS as readonly string[]).includes(value);
}

export function getTemplateCopy(dict: Dictionary, id: TemplateId): TemplateCopy {
  const map: Record<TemplateId, TemplateCopy> = {
    luxury: {
      name: dict.tplLuxuryName,
      tag: dict.tplLuxuryTag,
      tagline: dict.tplLuxuryTagline,
      desc: dict.tplLuxuryDesc,
    },
    boutique: {
      name: dict.tplBoutiqueName,
      tag: dict.tplBoutiqueTag,
      tagline: dict.tplBoutiqueTagline,
      desc: dict.tplBoutiqueDesc,
    },
    urban: {
      name: dict.tplUrbanName,
      tag: dict.tplUrbanTag,
      tagline: dict.tplUrbanTagline,
      desc: dict.tplUrbanDesc,
    },
    nature: {
      name: dict.tplNatureName,
      tag: dict.tplNatureTag,
      tagline: dict.tplNatureTagline,
      desc: dict.tplNatureDesc,
    },
    glamping: {
      name: dict.tplGlampingName,
      tag: dict.tplGlampingTag,
      tagline: dict.tplGlampingTagline,
      desc: dict.tplGlampingDesc,
    },
  };
  return map[id];
}
