import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import instLogo from "../../assets/img/social/inst.png";
import githLogo from "../../assets/img/social/gh.png";
import linkdLogo from "../../assets/img/social/linkd.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          <Link to="https://www.linkedin.com/in/oseoliveira/" target="_blank">
            <img src={instLogo} alt="instagram" />
          </Link>
          <Link to="https://github.com/OseOliv" target="_blank">
            <img src={githLogo} alt="github" />
          </Link>
          <Link to="https://www.instagram.com/ozzyoliveira/" target="_blank">
            <img src={linkdLogo} alt="linkedin" />
          </Link>
        </div>

        <div className={styles.footerSpan}>
          <span>Produzido por Oseas Oliveira.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
