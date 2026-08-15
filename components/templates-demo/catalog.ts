import type { TemplateItem } from "./types";
import { TEMPLATE_ACCENTS } from "./types";
import BoutiqueTemplate from "./BoutiqueTemplate";
import GlampingTemplate from "./GlampingTemplate";
import LuxuryTemplate from "./LuxuryTemplate";
import NatureTemplate from "./NatureTemplate";
import UrbanTemplate from "./UrbanTemplate";

export const TEMPLATES: TemplateItem[] = [
  { id: "luxury", accent: TEMPLATE_ACCENTS.luxury, Demo: LuxuryTemplate },
  { id: "boutique", accent: TEMPLATE_ACCENTS.boutique, Demo: BoutiqueTemplate },
  { id: "urban", accent: TEMPLATE_ACCENTS.urban, Demo: UrbanTemplate },
  { id: "nature", accent: TEMPLATE_ACCENTS.nature, Demo: NatureTemplate },
  { id: "glamping", accent: TEMPLATE_ACCENTS.glamping, Demo: GlampingTemplate },
];
