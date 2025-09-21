import React from "react";
import styles from "./button.module.css";
type ButtonProps = {
  type?: "primary" | "secondary" | (string & {});
  title: string;
};

const Button = (props: ButtonProps) => {
  const { title, type = "primary" } = props;
  return <button className={`${styles.button} ${styles[type]}`}>{title}</button>;
};

export default Button;
