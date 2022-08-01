import React from "react";
import styles from "./styles/logo.module.scss";

export function Logo() {
  return (
    <img
      className={styles.logoImage}
      src="./assets/icons/logo.svg"
      alt="TESTTASK"
    />
  );
}
