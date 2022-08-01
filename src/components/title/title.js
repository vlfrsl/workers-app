import React from "react";
import styles from "./styles/title.module.scss";

export function Title({ text }) {
  return (
    <div className={styles.titleContainer}>
      <span className={styles.title}>{text}</span>
    </div>
  );
}
