import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocizeBackend from 'i18next-locize-backend';

const LOCIZE_PROJECT_ID = process.env.LOCIZE_PROJECT_ID;
const LOCIZE_API_KEY = process.env.LOCIZE_API_KEY;

export const initI18n = () => {
  // taken from:
  // https://github.com/locize/react-tutorial/blob/main/step_2/src/i18n.js
  i18n
    // i18next-locize-backend
    // loads translations from your project, saves new keys to it (saveMissing: true)
    // https://github.com/locize/i18next-locize-backend
    .use(LocizeBackend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      debug: true,
      lng: 'en',
      fallbackLng: 'en',
      saveMissing: true,
      // keySeparator: false,

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      backend: {
        projectId: LOCIZE_PROJECT_ID,
        apiKey: LOCIZE_API_KEY,
        referenceLng: 'en',
      },
    });
};

initI18n();
