import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  sr: () => import("../dictionaries/sr.json").then((m) => m.default),
  hr: () => import("../dictionaries/hr.json").then((m) => m.default),
  bs: () => import("../dictionaries/bs.json").then((m) => m.default),
  me: () => import("../dictionaries/me.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["sr"]>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const loader = dictionaries[locale] ?? dictionaries.sr;
  return loader();
};
