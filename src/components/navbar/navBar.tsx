import React from "react";
import styles from "./navbar.module.css";
import Button from "../buttons/button";

const NavBar = () => {
  return (
    <div className={styles["navbar"]}>
      <ul className={styles["nav-items"]}>
        <li className={`${styles["nav-item"]} ${styles["logo"]}`}>LOGO</li>
        <li className={styles["nav-item"]}>Primary</li>
        <li className={styles["nav-item"]}>Secondary</li>
        <li className={styles["nav-item"]}>Syllabus</li>
        <li className={styles["nav-item"]}>Our Method</li>
        <li className={styles["nav-item"]}>About Us</li>
      </ul>
      <div className="buttons">
        <Button title="For Students" type="secondary" />
        <Button title="Enquire" />
      </div>
    </div>
  );
};

export default NavBar;
