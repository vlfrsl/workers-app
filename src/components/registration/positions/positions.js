import React from "react";
import styles from "./styles/positions.module.scss";

export function Positions() {
  return (
    <div
      className={styles.container}
      onClick={(e) => {
        if (e.target.tagName === "INPUT") {
          console.log("yes");
        }
      }}
    >
      <div className={styles.title}>
        <span>Select your position</span>
      </div>
      <div className={styles.radioButtonContainer}>
        <input
          className={styles.radioBtn}
          type="radio"
          id="choice1"
          value="email"
        />
        <label htmlFor="choice1">Email</label>
      </div>
    </div>
  );
}
