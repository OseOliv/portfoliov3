import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import bgHome from "../../../assets/img/others/dev.png";
import CardItem from "./CardItem";

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
          <CardItem
            to="https://github.com/OseOliv/Exemple-Coffee-Shop-WebSite-BootStrap"
            imgSrc={require("../../../assets/img/project/teste-projetos1.png")}
            title="Projeto teste"
            description="É certamente o texto de marcador de posição mais famoso, mesmo que existam diferentes versões distinguíveis da ordem em que as palavras latinas são repetidas."
            skills={["HTML", "JavaScript", "CSS", "React.js"]}
          />
        
          

          <Link
            className={styles.btnProjectLink}
            to="https://github.com/OseOliv"
            target="_blanc"
          >
            <button className={styles.btnProject}>
              <span className={styles.btnProjectSpan}>VER MAIS</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
