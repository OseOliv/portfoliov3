import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import bgHome from "../../assets/img/others/dev.png";
import avatarperfil from "../../assets/img/others/avatarperfil3.png";


const AboutContent = () => {
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
          <p className={styles.text}>
            <div className={styles.pageTitle}>
              <p>SOBRE MIM</p>
            </div>
            Meu nome é Oseas Oliveira, sou um desenvolvedor. Minha
            abordagem se concentra na efetividade e na aplicação das melhores
            práticas na escrita de códigos, visando sempre proporcionar a melhor
            experiência aos usuários.
            <br></br>
            <br></br>A tecnologia tem sido uma presença constante em minha vida.
            Foi em 2005 que tive meu primeiro contato com o mundo do "Web
            Design", e desde então fiquei fascinado com as possibilidades
            visuais que um computador poderia oferecer.
            <br></br>
            <br></br>
            Apesar de minha experiência de 12 anos na gastronomia, nunca deixei
            de acompanhar as novidades no desenvolvimento web. Hoje, mantenho-me
            focado nos estudos das linguagens front-end e back-end (especialmente Python e Ruby) e nas últimas
            tecnologias, buscando aprimorar constantemente minhas habilidades.
            <br></br>
            <br></br>
            <div className={styles.skillsContainer}>
              <p>
                Linguagens, frameworks e bibliotecas com as quais tenho
                experiência(Conhecimento):
              </p>
              <br></br>
              <div className={styles.skills}>
                <span className={styles.skillsSpan}>HTML</span>
                <span className={styles.skillsSpan}>CSS</span>
                <span className={styles.skillsSpan}>JavaScript</span>
                <span className={styles.skillsSpan}>Ruby</span>
                <span className={styles.skillsSpan}>Python</span>
                <span className={styles.skillsSpan}>TypeScript</span>
                <span className={styles.skillsSpan}>Node.js</span>
                <span className={styles.skillsSpan}>React Native</span>
                <span className={styles.skillsSpan}>React.js</span>
                <span className={styles.skillsSpan}>Ruby on Rails</span>
                <span className={styles.skillsSpan}>SQLite</span>
                <span className={styles.skillsSpan}>PostgreSQL</span>
              </div>
            </div>
          </p>
          <div className={styles.avatarContainer}>
            <img src={avatarperfil} alt="avatar" className={styles.avatar} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
