import React from "react";
import styles from "./styles/loader.module.scss";
import ClipLoader from "react-spinners/ClipLoader";

export function Loader() {
  return (
    <div className={styles.container}>
      <ClipLoader color="#00BDD3" size="48px" />
    </div>
  );
}
