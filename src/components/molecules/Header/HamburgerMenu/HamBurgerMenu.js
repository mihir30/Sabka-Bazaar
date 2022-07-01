import React from "react";
import "./HamBurgerMenu.scss";
import { useState } from "react";
import Menu from "../Menu/Menu";
const HamBurgerMenu = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <section className="menu">
      <div className="hamburgerMenu" onClick={handleToggle}>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png"
          className="menuCollapsed"
          width={32}
          height={32}
          alt="Menu Collapsed"
        />
      </div>
      <nav className={`dropdownWrap ${isActive ? "" : "active"}`}>
        <ul onClick={handleToggle}>
          <Menu />
        </ul>
      </nav>
    </section>
  );
};

export default HamBurgerMenu;
