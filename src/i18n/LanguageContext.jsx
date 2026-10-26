// src/i18n/LanguageContext.jsx

import React, { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import translations from "./translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const { lang } = useParams();
  const language = lang === "en" ? "en" : "es";

  const t = (key) => translations[language][key] ?? key;

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage debe utilizarse dentro de LanguageProvider"
    );
  }

  return context;
}