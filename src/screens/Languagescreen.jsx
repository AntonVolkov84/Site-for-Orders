import React from "react";
import { LanguageResources } from "../i18next";
import i18next from "../i18next";
import LanguageList from "../locales/LanguageList.json";
import "./LanguageScreen.css";

function Languagescreen() {
  const changeLng = (lng) => {
    i18next.changeLanguage(lng);
  };
  return (
    <div className="languages">
      {Object.keys(LanguageResources).map((e, index) => (
        <button className="languages-btn" key={index} onClick={() => changeLng(e)}>
          {LanguageList[e].nativeName}
        </button>
      ))}
    </div>
  );
}

export default Languagescreen;
