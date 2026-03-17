"use client";

import { useCallback } from "react";
import { scrollToSection } from "@/lib/utils";

export default function useScrollAnimation() {
  const scrollTo = useCallback((id: string) => {
    scrollToSection(id);
  }, []);

  return { scrollTo };
}

