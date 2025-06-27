import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: 'ar', 
    fallbackLng: 'ar', 
    supportedLngs: ['ar', 'en'], 
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },

    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;