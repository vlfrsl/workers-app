import React from "react";
import styles from "./styles/buttons.module.scss";
import classNames from "classnames";

export function Button({ text, callback, disabled = false }) {
  const classes = classNames(styles.btn, { [styles.disabled]: disabled });
  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={() => {
        callback();
      }}
    >
      {text}
    </button>
  );
}
