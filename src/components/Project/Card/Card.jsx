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
            to="https://github.com/OseOliv/op-memory-game"
            imgSrc={require("../../../assets/img/project/opmemory.png")}
            title="OP:Memory Game"
            description="Este é um jogo da memória envolvendo os adorados personagens da série One Piece, cuidadosamente criado com React, TypeScript e styled-components. Teste sua memória enquanto combina pares de cartas com os personagens favoritos da série."
            skills={["React.js", "CSS", "TypeScript", "styled-components"]}
          />

          <CardItem
            to="https://github.com/OseOliv/pizza-project-app"
            imgSrc={require("../../../assets/img/project/pizzaria.gif")}
            title="Pizzaria App"
            description="O projeto é uma aplicação completa de sistema de pedidos para pizzaria/lanchonete, utilizando React, React Native, NodeJS, NextJS, Axios, SASS, Express.js para APIs, Prisma para banco de dados e TypeScript para tipagem estática."
            skills={["React.js", "React Native", "TypeScript", "Next.Js"]}
          />

          <CardItem
            to="https://github.com/OseOliv/movie-app-mobile"
            imgSrc={require("../../../assets/img/project/movieaoo.gif")}
            title="Cinema App"
            description=" Aplicativo móvel  que proporciona uma experiência imersiva ao explorar sinopses, elencos completos e detalhes dos artistas que protagonizam os filmes, utilizando a API do TMDB ."
            skills={["React Native", "JavaScript", "Axios", "Tailwind"]}
          />

          <CardItem
            to="https://github.com/OseOliv/IMC-APP-TS"
            imgSrc={require("../../../assets/img/project/imc.png")}
            title="IMC App"
            description="Um aplicativo para calcular o Índice de Massa Corpórea (IMC), desenvolvido com TypeScript e CSS Modules. Desfrute de uma ferramenta responsiva e eficiente para monitorar sua saúde e bem-estar."
            skills={["React.js", "TypeScript", "CSS"]}
          />

          {/* <CardItem
            to=""
            imgSrc={require("../../../assets/img/project/")}
            title=""
            description=""
            skills={["", "", "", ""]}
          /> */}

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
