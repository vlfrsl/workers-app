import React, { useState } from "react";
import styles from "./styles/input.module.scss";
import { useDispatch } from "react-redux";
import classNames from "classnames";

export function Input({ placeHolder, validator, initialData, action }) {
  const dispatch = useDispatch();
  const [isCorrect, setCorrect] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  const inputClassNames = classNames(styles.inputContainer, {
    [styles.error]: !isCorrect,
  });

  return (
    <div className={inputClassNames} data-error={errMessage}>
      <input
        className={styles.input}
        placeholder={placeHolder}
        defaultValue={initialData}
        onChange={(e) => {
          const { isValid, message } = validator(e.target.value);
          setCorrect(isValid);

          if (isValid) {
            dispatch(action(e.target.value));
          } else {
            setErrMessage(message);
            dispatch(action(null));
          }
        }}
      />
    </div>
  );
}
