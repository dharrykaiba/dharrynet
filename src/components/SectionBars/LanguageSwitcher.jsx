
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaEarthAmericas } from "react-icons/fa6";
import { useLanguage } from "../../i18n/LanguageContext";
import "./languageSwitcher.css";

const languages = [
  { code: "es", label: "Español", nativeLabel: "ES" },
  { code: "en", label: "English", nativeLabel: "EN" },
];

const LanguageSwitcher = () => {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = lang === "en" ? "en" : "es";

  const changeLanguage = (nextLanguage) => {
    if (nextLanguage === currentLanguage) {
      setIsOpen(false);
      return;
    }

    const segments = location.pathname.split("/").filter(Boolean);

    if (segments.length > 0 && ["es", "en"].includes(segments[0])) {
      segments[0] = nextLanguage;
    } else {
      segments.unshift(nextLanguage);
    }

    navigate({
      pathname: `/${segments.join("/")}`,
      search: location.search,
      hash: location.hash,
    });

    setIsOpen(false);
  };

  return (
    <div
      className={`language-menu ${isOpen ? "is-open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="language-menu__trigger"
        aria-label={t("language")}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setIsOpen(false);
        }}
      >
        <FaEarthAmericas aria-hidden="true" />
        <span className="language-menu__current">
          {currentLanguage.toUpperCase()}
        </span>
        <span className="language-menu__arrow" aria-hidden="true">
          ▾
        </span>
      </button>

      <div
        className="language-menu__dropdown"
        role="menu"
        aria-label={t("language")}
      >
        {languages.map((language) => (
          <button
            key={language.code}
            type="button"
            role="menuitem"
            lang={language.code}
            className={`language-menu__option ${
              currentLanguage === language.code ? "is-active" : ""
            }`}
            aria-current={
              currentLanguage === language.code ? "true" : undefined
            }
            onClick={() => changeLanguage(language.code)}
          >
            <span className="language-menu__code">
              {language.nativeLabel}
            </span>
            <span>{language.label}</span>
            {currentLanguage === language.code && (
              <span className="language-menu__check" aria-hidden="true">
                ✓
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
