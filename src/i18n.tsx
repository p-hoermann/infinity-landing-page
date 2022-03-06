import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//language
import { default as EnglishTexts } from "./common/translations/en.json"
import { default as GermanyTexts } from "./common/translations/ge.json"
import { default as FrenchTexts } from "./common/translations/fr.json"
import { default as TurkeyTexts } from "./common/translations/tu.json"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: EnglishTexts,
      },
      ge: {
        translation: GermanyTexts,
      },
      fr: {
        translation: FrenchTexts,
      },
      tu: {
        translation: TurkeyTexts,
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
