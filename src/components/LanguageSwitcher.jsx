import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <div className="text-sm text-green-800 text-right pr-6 pt-2">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`mr-2 ${
          i18n.language === "en" ? "font-bold underline" : ""
        }`}
        type="button"
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange("np")}
        className={`${i18n.language === "np" ? "font-bold underline" : ""}`}
        type="button"
      >
        नेपाली
      </button>
    </div>
  );
};

export default LanguageSwitcher;
