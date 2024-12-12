import React from "react";
import "./Header.css";
import logo from "../Orders3.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-blockimg">
        <img className="header-img" alt="Logo for Orders" src={logo}></img>
      </div>
      <div className="header-menu">
        <Link className="btn-home" to="/">
          <h2 className="header-href">Home</h2>
        </Link>
        <Link className="btn-language" to="language">
          <h2 className="header-href">Language</h2>
        </Link>
        <Link className="btn-confidential" to="confidential">
          <h2 className="header-href">CONFIDENTIALITY</h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
