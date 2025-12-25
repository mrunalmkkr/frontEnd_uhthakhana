import { createContext, useState } from "react";

// 1. Create Context
export const LanguageContext = createContext();

// 2. Properly define and export Provider
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("EN");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

