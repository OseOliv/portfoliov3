import React from "react";
import styles from "./style.module.css";
import bgHome from "../../assets/img/others/dev.png";
import emptyavatar from "../../assets/img/others/emptyavatar.jpg";

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
            Meu nome é Oseas Oliveira, sou um desenvolvedor front-end. Minha
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
            focado nos estudos das linguagens front-end e nas últimas
            tecnologias, buscando aprimorar constantemente minhas habilidades.
          </p>
          <div className={styles.avatarContainer}>
            <img src={emptyavatar} alt="avatar" className={styles.avatar} />
            <span className={styles.btnCv}>CURRICULUM</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
