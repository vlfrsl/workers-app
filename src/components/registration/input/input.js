import React from "react";
import styles from "./styles/input.module.scss";

export function Input() {
  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} type="text" placeholder="Email" />
    </div>
  );
}
