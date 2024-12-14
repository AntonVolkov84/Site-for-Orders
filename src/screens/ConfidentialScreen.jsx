import React from "react";
import "./ConfidentialScreen.css";
import { useTranslation } from "react-i18next";

function ConfidentialScreen() {
  const { t } = useTranslation();
  return (
    <div className="confidentiality">
      <h3>{t("confName")}</h3>
      <h4>1. {t("confTitle")}</h4>
      <p className="confidentiality-text">{t("conf1text")}</p>
      <h4>2. {t("conf2title")}</h4>
      <p className="confidentiality-text">{t("conf2text")}</p>
      <h4>3. {t("conf3title")}</h4>
      <p className="confidentiality-text">{t("conf3text")}</p>
      <h4>4. {t("conf4title")}</h4>
      <p className="confidentiality-text">{t("conf4text")}</p>
      <h4>5. {t("conf5title")}</h4>
      <p className="confidentiality-text">{t("conf5text")}</p>
      <h4>6. {t("conf6title")}</h4>
      <p className="confidentiality-text">{t("conf6text")}</p>
      <h4>7. {t("conf7title")}</h4>
      <p className="confidentiality-text">{t("conf7text")}</p>
      <h4>8. {t("conf8title")}</h4>
      <p className="confidentiality-text">{t("conf8text")}</p>
      <h4>9. {t("conf9title")}</h4>
      <p className="confidentiality-text">{t("conf9text")}</p>
    </div>
  );
}

export default ConfidentialScreen;
