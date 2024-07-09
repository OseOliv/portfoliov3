import React from "react";
import styles from "./style.module.css";
import bgHome from "../../assets/img/others/dev.png";

const HomeContent = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.overlay}></div>

      <img
        src={bgHome}
        alt="background dev"
        className={styles.backgroundImage}
      />
      <div className={styles.container}>
        <div>
          <span>
            
          </span>
        </div>
        <div>
          <div className={styles.welcomeContainer}>
            <span className={styles.welcome}>Olá, meu nome é</span>
          </div>
          <span className={styles.name}>Oséas Oliveira</span>
        </div>
        <div className={styles.subtitle}>
          <span>Desenvolvedor.</span>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
