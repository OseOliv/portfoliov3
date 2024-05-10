import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const CardItem = ({ to, imgSrc, title, description, skills }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.imgCard}>
          <Link to={to} target="_blank">
            <img src={imgSrc} alt="teste" />
          </Link>
        </div>
      </div>

      <div className={styles.cardContainerDescrption}>
        <div className={styles.cardTitle}>
          <span>{title}</span>
        </div>
        <div className={styles.cardDescription}>
          <span>{description}</span>
        </div>
        <div className={styles.cardSkills}>
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
