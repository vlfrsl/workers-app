import React from "react";
import styles from "./styles/error.module.scss";

export function Error({ message }) {
  console.log("MESSAGE IN ERR", message);
  return (
    <div className={styles.errorContainer}>
      <span>{message || "Something went wrong. Try again later."}</span>
    </div>
  );
}
