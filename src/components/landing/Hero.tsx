import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["content"]}>
        <p
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
        >
          First Choice School For Children Development
        </p>
        <p style={{ margin: "20px 0" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          vel repellendus quidem ut inventore quisquam sunt architecto
          voluptatem nobis, voluptates rerum maxime a amet enim cupiditate
        </p>
        <div className={styles["flags"]}>🇫🇷 🇬🇧 🇺🇸</div>
      </div>
      <div className={styles["logos"]}>LOGO</div>
    </div>
  );
};

export default Hero;
