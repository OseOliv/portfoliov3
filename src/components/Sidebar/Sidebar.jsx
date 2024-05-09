import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { IoClose as CloseIcon } from "react-icons/io5";
import { menuLinks } from "../Header/menuLink";

const isActive = ({ isActive }) => (isActive ? styles.activeLink : "");

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      <div className={`${styles.sidebar} ${isOpen && styles.open}`}>
        <span className={styles.closeIcon} onClick={closeSidebar}>
          <CloseIcon size={30} />
        </span>

        <div className={styles.menuLinks}>
          <div className={styles.menuLinks}>
            {menuLinks.map((mlink) => (
              <NavLink
                key={mlink.name}
                to={mlink.to}
                className={isActive}
                onClick={closeSidebar}
              >
                {mlink.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
