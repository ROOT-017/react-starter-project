import React from "react";
import styles from "./card.module.css";

type CardProps = {
  image: string;
  color: string;
  title: string;
  description: string;
};

const Card = (props: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: props.color,
      }}
    >
      <img src={props.image} alt={props.title} className={styles.cardImage} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
