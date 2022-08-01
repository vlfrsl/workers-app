import React, { useState } from "react";
import styles from "./styles/input.module.scss";

import classNames from "classnames";

export function Input({ placeHolder, validator, handelInput, hint = "" }) {
  const [isCorrect, setCorrect] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  const inputClassNames = classNames(styles.inputContainer, {
    [styles.error]: !isCorrect,
  });

  return (
    <div className={inputClassNames} data-error={errMessage} data-hint={hint}>
      <input
        className={styles.input}
        placeholder={placeHolder}
        onChange={(e) => {
          const { isValid, message } = validator(e.target.value);
          setCorrect(isValid);

          if (isValid) {
            handelInput(e.target.value);
          } else {
            setErrMessage(message);
            handelInput(null);
          }
        }}
      />
    </div>
  );
}
