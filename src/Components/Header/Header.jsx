import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

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
      <div>
        <img src="/assets/Logo.png" className="logo-imgh" alt="Logo" />
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
            <a>عن المركز</a>
          </li>
          <li>
            <a>الأسئلة الشائعة</a>
          </li>
        </ul>
      </div>

      <button className="menu-button" onClick={() => setShowMenu(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}
