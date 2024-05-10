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
            imgSrc={require("../../../assets/img/project/coffe.png")}
            title="Coffe Shop"
            description="Este website de cafeteria integra frameworks e bibliotecas para criar uma experiência online envolvente e funcional. Com uma interface intuitiva, os clientes podem explorar os produtos e serviços oferecidos com facilidade, desfrutando de uma navegação suave e atraente."
            skills={["HTML","CSS", "JavaScript", "Bootstrap"]}
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
