import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enPages from './locales/en/pages.json';
import enForms from './locales/en/forms.json';
import enExplore from './locales/en/explore.json';
import enGuides from './locales/en/guides.json';

import deCommon from './locales/de/common.json';
import deHome from './locales/de/home.json';
import dePages from './locales/de/pages.json';
import deForms from './locales/de/forms.json';
import deExplore from './locales/de/explore.json';
import deGuides from './locales/de/guides.json';

import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esPages from './locales/es/pages.json';
import esForms from './locales/es/forms.json';
import esExplore from './locales/es/explore.json';
import esGuides from './locales/es/guides.json';

import ruCommon from './locales/ru/common.json';
import ruHome from './locales/ru/home.json';
import ruPages from './locales/ru/pages.json';
import ruForms from './locales/ru/forms.json';
import ruExplore from './locales/ru/explore.json';
import ruGuides from './locales/ru/guides.json';

import svCommon from './locales/sv/common.json';
import svHome from './locales/sv/home.json';
import svPages from './locales/sv/pages.json';
import svForms from './locales/sv/forms.json';
import svExplore from './locales/sv/explore.json';
import svGuides from './locales/sv/guides.json';

import nlCommon from './locales/nl/common.json';
import nlHome from './locales/nl/home.json';
import nlPages from './locales/nl/pages.json';
import nlForms from './locales/nl/forms.json';
import nlExplore from './locales/nl/explore.json';
import nlGuides from './locales/nl/guides.json';

export const supportedLanguages = ['en', 'de', 'es', 'ru', 'sv', 'nl'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const languageNames: Record<SupportedLanguage, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Espanol',
  ru: 'Русский',
  sv: 'Svenska',
  nl: 'Nederlands',
};

export const languageFlags: Record<SupportedLanguage, string> = {
  en: 'GB',
  de: 'DE',
  es: 'ES',
  ru: 'RU',
  sv: 'SE',
  nl: 'NL',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, home: enHome, pages: enPages, forms: enForms, explore: enExplore, guides: enGuides },
      de: { common: deCommon, home: deHome, pages: dePages, forms: deForms, explore: deExplore, guides: deGuides },
      es: { common: esCommon, home: esHome, pages: esPages, forms: esForms, explore: esExplore, guides: esGuides },
      ru: { common: ruCommon, home: ruHome, pages: ruPages, forms: ruForms, explore: ruExplore, guides: ruGuides },
      sv: { common: svCommon, home: svHome, pages: svPages, forms: svForms, explore: svExplore, guides: svGuides },
      nl: { common: nlCommon, home: nlHome, pages: nlPages, forms: nlForms, explore: nlExplore, guides: nlGuides },
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'pages', 'forms', 'explore', 'guides'],
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
