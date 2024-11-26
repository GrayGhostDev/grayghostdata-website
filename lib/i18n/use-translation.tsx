"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ValidLocale, defaultLocale, translations, Translation } from "./config";

interface LanguageContextType {
  locale: ValidLocale;
  setLocale: (locale: ValidLocale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<ValidLocale>(defaultLocale);

  useEffect(() => {
    const savedLocale = localStorage.getItem("language") as ValidLocale;
    if (savedLocale && Object.keys(translations).includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const getNestedTranslation = (obj: Translation, path: string): string => {
    const result = path.split(".").reduce<any>((prev, curr) => {
      if (prev && typeof prev === "object" && curr in prev) {
        return prev[curr];
      }
      return path;
    }, obj);

    return typeof result === "string" ? result : path;
  };

  const t = (key: string): string => {
    const translation = translations[locale];
    return getNestedTranslation(translation, key);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
