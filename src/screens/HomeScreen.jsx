import React from "react";
import { useTranslation } from "react-i18next";
import "./HomeScreen.css";
import logoFirst from "../CreatingOrder.png";
import logoSecond from "../Proffile.png";
import logoThird from "../OrderScreen.png";

function HomeScreen() {
  const { t } = useTranslation();
  return (
    <div className="home">
      <h3>{t("homeTitle")}</h3>
      <p className="titletext">{t("homeTitleText")}</p>
      <div className="block">
        <img className="block-img" alt="Creating order screen" src={logoFirst}></img>
        <div className="block-info">
          <div className="info">
            <h4 className="info-title">{t("instruction1Title")}</h4>
            <p className="info-text">{t("instruction1Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("instruction2Title")}</h4>
            <p className="info-text">{t("instruction2Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("instruction3Title")}</h4>
            <p className="info-text">{t("instruction3Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("instruction4Title")}</h4>
            <p className="info-text">{t("instruction4Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("instruction5Title")}</h4>
            <p className="info-text">{t("instruction5Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("instruction6Title")}</h4>
            <p className="info-text">{t("instruction6Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("instruction7Title")}</h4>
            <p className="info-text">{t("instruction7Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("instruction8Title")}</h4>
            <p className="info-text">{t("instruction8Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("instruction9Title")}</h4>
            <p className="info-text">{t("instruction9Text")}</p>
          </div>
        </div>
      </div>
      <div className="block">
        <img className="block-img" alt="proffile" src={logoSecond}></img>
        <div className="block-info">
          <div className="info">
            <h4 className="info-title">{t("2instruction1Title")}</h4>
            <p className="info-text">{t("2instruction1Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("2instruction2Title")}</h4>
            <p className="info-text">{t("2instruction2Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("2instruction3Title")}</h4>
            <p className="info-text">{t("2instruction3Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("2instruction4Title")}</h4>
            <p className="info-text">{t("2instruction4Text")}</p>
          </div>
          <div className="info">
            <h4 className="info-title">{t("2instruction5Title")}</h4>
            <p className="info-text">{t("2instruction5Text")}</p>
          </div>
        </div>
      </div>
      <div className="block">
        <img className="block-img" alt="orderScreen" src={logoThird}></img>
        <div className="block-info">
          <div className="info">
            <h4 className="info-title">{t("2instruction1Title")}</h4>
            <p className="info-text">{t("2instruction1Text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
