import { useState } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

import Logo from "../../assets/Logo.png";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className="flex"
      style={{
        fontFamily: '"IBM Plex Sans Arabic", sans-serif',
        color: "white",
      }}
    >
      <div className="logo flex">
        <img src={Logo} className="logo-img" alt="Logo" />
      </div>

      <div className="nav-bar">
        <ul className="header">
          <li>
            <a>الرئيسية</a>
          </li>
          <li>
            <a>الخدمات</a>
          </li>
          <li>
            <a>الأسئلة الشائعة</a>
          </li>
          <li>
            <a>عن المركز</a>
          </li>
        </ul>
      </div>

      <button className="menu-button" onClick={() => setShowMenu(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {showMenu && (
        <div className="fixed">
          <ul
            className="menu-box"
            style={{
              fontFamily: '"IBM Plex Sans Arabic", sans-serif',
              color: "#783288",
            }}
          >
            <li>
              <button className="close-icon" onClick={() => setShowMenu(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </li>
            <li>
              <a>الحساب</a>
            </li>
            <li>
              <a>الرئيسية</a>
            </li>
            <li>
              <a>المفقودات</a>
            </li>
            <li>
              <a>الخدمات</a>
            </li>
            <li>
              <a>التواصل</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
