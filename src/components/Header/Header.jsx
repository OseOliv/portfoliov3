import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import logo from "../../assets/img/logo/logo.png";
import { IoMenuOutline as MenuIcon } from "react-icons/io5";
import { menuLinks } from "./menuLink";
import Sidebar from "../Sidebar/Sidebar";

const isActive = ({ isActive }) => (isActive ? styles.activeLink : "");

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={logo} width={75} height={45} alt="logo oseas oliveira" />
          </NavLink>
        </div>
        {/* Menu Links */}
        <div className={styles.menuLinks}>
          {menuLinks.map((mlink) => (
            <NavLink key={mlink.name} to={mlink.to} className={isActive}>
              <button className="buttonLinks">
                {mlink.name}
                </button>
            </NavLink>
          ))}
        </div>
        {/* Menu Ham */}
        <div className={styles.menuBtn} onClick={openSidebar}>
          <MenuIcon size={30} />
        </div>
      </div>
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
    </header>
  );
};

export default Header;
