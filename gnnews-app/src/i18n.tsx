import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as english from "./assets/locales/en/translation.json"
import * as polish from "./assets/locales/pl/translation.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: english
      },
      pl: {
        translation: polish
      }
    },
    lng: "en",
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
  
export default i18n;