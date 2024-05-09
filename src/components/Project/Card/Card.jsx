import React from "react";
import styles from "./style.module.css";
import imgteste1 from "../../../assets/img/Project/teste-projetos1.png";
import { Link } from "react-router-dom";
import bgHome from "../../../assets/img/others/dev.png";

const Card = () => {
  return (
    <>
      <div className={styles.backgroundContainer}>
        <div className={styles.overlay}></div>

        <img
          src={bgHome}
          alt="background dev"
          className={styles.backgroundImage}
        />

        <div className={styles.container}>
          <div className={styles.pageTitle}>
            <span>MEUS PROJETOS</span>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <div className={styles.imgCard}>
                <Link
                  to="https://github.com/OseOliv/Exemple-Coffee-Shop-WebSite-BootStrap"
                  target="_blanc"
                >
                  <img src={imgteste1} alt="teste" />
                </Link>
              </div>
            </div>

            <div className={styles.cardContainerDescrption}>
              <div className={styles.cardTitle}>
                <span>Primeiro Projeto</span>
              </div>
              <div className={styles.cardDescription}>
                <span>
                  Descricao Projeto Descricao Projeto Descricao Projeto
                  Descricao Descricao Descricao Descricao Descricao Descricao
                  Descricao Descricao Descricao DescricaoDescricao Descricao
                  Projeto Descricao Projeto
                </span>
              </div>
              <div className={styles.cardSkills}>
                <span>HTML</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>React.js</span>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <div className={styles.imgCard}>
                <Link
                  to="https://github.com/OseOliv/Exemple-Coffee-Shop-WebSite-BootStrap"
                  target="_blanc"
                >
                  <img src={imgteste1} alt="teste" />
                </Link>
              </div>
            </div>

            <div className={styles.cardContainerDescrption}>
              <div className={styles.cardTitle}>
                <span>Primeiro Projeto</span>
              </div>
              <div className={styles.cardDescription}>
                <span>
                  Descricao Projeto Descricao Projeto Descricao Projeto
                  Descricao Descricao Descricao Descricao Descricao Descricao
                  Descricao Descricao Descricao DescricaoDescricao Descricao
                  Projeto Descricao Projeto
                </span>
              </div>
              <div className={styles.cardSkills}>
                <span>HTML</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>React.js</span>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <div className={styles.imgCard}>
                <Link
                  to="https://github.com/OseOliv/Exemple-Coffee-Shop-WebSite-BootStrap"
                  target="_blanc"
                >
                  <img src={imgteste1} alt="teste" />
                </Link>
              </div>
            </div>

            <div className={styles.cardContainerDescrption}>
              <div className={styles.cardTitle}>
                <span>Primeiro Projeto</span>
              </div>
              <div className={styles.cardDescription}>
                <span>
                  Descricao Projeto Descricao Projeto Descricao Projeto
                  Descricao Descricao Descricao Descricao Descricao Descricao
                  Descricao Descricao Descricao DescricaoDescricao Descricao
                  Projeto Descricao Projeto
                </span>
              </div>
              <div className={styles.cardSkills}>
                <span>HTML</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>React.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
