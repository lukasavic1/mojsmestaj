"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Viewport } from "./types";

const ViewportContext = createContext<Viewport>("desktop");

export function ViewportProvider({
  value,
  children,
}: {
  value: Viewport;
  children: ReactNode;
}) {
  return <ViewportContext.Provider value={value}>{children}</ViewportContext.Provider>;
}

export function useViewport() {
  return useContext(ViewportContext);
}
