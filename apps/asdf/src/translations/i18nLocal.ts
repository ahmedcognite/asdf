import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJSON from './locale/en.json';
import nbJSON from './locale/nb.json';

export const initI18n = () => {
  i18n.use(initReactI18next).init({
    resources: {
      // Where we're gonna put translations' files
      en: { ...enJSON },
      nb: { ...nbJSON },
    },
    lng: 'en', // Set the initial language of the App
    fallbackLng: 'en', // Set the initial language of the App
  });
};

initI18n();
