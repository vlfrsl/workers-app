import React from "react";
import styles from "./styles/error.module.scss";

export function Error({ message }) {
  return (
    <div className={styles.errorContainer}>
      <span>{message || "Something went wrong. Try again later."}</span>
    </div>
  );
}
