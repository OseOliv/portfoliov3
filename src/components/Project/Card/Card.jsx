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
            skills={["HTML", "CSS", "JavaScript", "Bootstrap"]}
          />
          <CardItem
            to="https://github.com/OseOliv/pizza-project-app"
            imgSrc={require("../../../assets/img/project/pizzaria.gif")}
            title="Pizzaria App"
            description="O projeto é uma aplicação completa de sistema de pedidos para pizzaria/lanchonete, utilizando React, React Native, NodeJS, NextJS, Axios, SASS, Express.js para APIs, Prisma para banco de dados e TypeScript para tipagem estática."
            skills={["React.js", "React Native", "TypeScript", "Next.Js"]}
          />

          <CardItem
            to="https://github.com/OseOliv/op-memory-game"
            imgSrc={require("../../../assets/img/project/opmemory.png")}
            title="OP:Memory Game"
            description="Este é um jogo da memória envolvendo os adorados personagens da série One Piece, cuidadosamente criado com React, TypeScript e styled-components. Teste sua memória enquanto combina pares de cartas com os personagens favoritos da série."
            skills={["React.js", "CSS", "TypeScript", "styled-components"]}
          />

          <CardItem
            to="https://github.com/OseOliv/IMC-APP-TS"
            imgSrc={require("../../../assets/img/project/imc.png")}
            title="IMC App"
            description="Um aplicativo para calcular o Índice de Massa Corpórea (IMC), desenvolvido com TypeScript e CSS Modules. Desfrute de uma ferramenta responsiva e eficiente para monitorar sua saúde e bem-estar."
            skills={["React.js", "TypeScript", "CSS"]}
          />

          <CardItem
            to="https://github.com/OseOliv/Weather-App-v1"
            imgSrc={require("../../../assets/img/project/weather.png")}
            title="Weather App"
            description="Um modelo de Weather App em React, integrando as APIs do OpenWeatherMap e do GeoDB para fornecer informações precisas sobre o clima. Estilizado com CSS e JavaScript, oferece uma experiência intuitiva e informativa para os usuários."
            skills={["React.js", "CSS", "JavaScript", "OpenWeather API"]}
          />

          <CardItem
            to="https://github.com/OseOliv/Pokedex"
            imgSrc={require("../../../assets/img/project/poke.png")}
            title="Pokedex Pokemon"
            description="Um modelo simples de Pokedex Pokémon, construído com a PokeAPI e estilizado apenas com CSS e JavaScript. Explore informações sobre seus Pokémon favoritos de forma intuitiva."
            skills={["HTML", "CSS", "JavaScript", "PokeAPI"]}
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
