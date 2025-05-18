import React from "react";
import "./Header.css";
import logo from "../Orders3.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="header-blockimg">
        <img className="header-img" alt="Logo for Orders" src={logo}></img>
      </div>
      <div className="header-menu">
        <Link className="btn-home" to="home">
          <h2 className="header-href">{t("home")}</h2>
        </Link>
        <Link className="btn-language" to="language">
          <h2 className="header-href">{t("language")}</h2>
        </Link>
        <Link className="btn-confidential" to="/">
          <h2 className="header-href">{t("confidentiality")}</h2>
        </Link>
        <Link className="btn-confidential" to="questions">
          <h2 className="header-href">{t("question")}</h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
