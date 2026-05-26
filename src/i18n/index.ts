import React, { createContext, useContext, useState } from 'react';
import ja from './ja.json';
import zh from './zh.json';
import en from './en.json';

type Language = 'ja' | 'zh' | 'en';
type Translations = typeof ja;

interface I18nContextProps {
  lang: Language;
  t: (key: keyof Translations) => string;
  setLanguage: (lang: Language) => void;
}

const translations: Record<Language, Translations> = { ja, zh, en };

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('sanyou_lang');
    if (saved === 'ja' || saved === 'zh' || saved === 'en') return saved;
    return 'ja';
  });

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('sanyou_lang', newLang);
  };

  const t = (key: keyof Translations) => {
    const currentTranslations = translations[lang] as Record<string, string>;
    return currentTranslations[key] || key;
  };

  return React.createElement(
    I18nContext.Provider,
    { value: { lang, t, setLanguage } },
    children
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
