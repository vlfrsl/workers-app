import React from "react";
import styles from "./styles/text.module.scss";

export function Text({ text }) {
  return (
    <div className={styles.textContainer}>
      <span>{text}</span>
    </div>
  );
}
