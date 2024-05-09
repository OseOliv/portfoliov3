import React from "react";
import styles from "./style.module.css";
import bgHome from '../../assets/img/others/dev.png'

const HomeContent = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.overlay}></div>
      <img src={bgHome} alt="background dev" className={styles.backgroundImage} />
      <div className={styles.container}>
        <div>
          <h4 className={styles.welcome}>Olá, meu nome é</h4>
        </div>
        <div>
          <p className={styles.name}>Oséas Oliveira</p>
        </div>
        <div>
          <p className={styles.textOne}>
            Há mais de 18 anos, minha fascinação é materializar minha
            criatividade, <br></br>conhecimento e paixão pela harmonia visual.
          </p>
        </div>
        <div className={styles.textQuote}>
          <span>
            <i>“Experience is the name everyone gives to their mistakes.”</i>
            <br></br>- Oscar Wilde
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
