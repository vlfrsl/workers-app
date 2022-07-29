import React, { useEffect, useState } from "react";
import styles from "./styles/input.module.scss";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

export function Input({ inputType, initial, action, isValid }) {
  const dispatch = useDispatch();
  const [isCorrect, setCorrect] = useState(true);

  const userData = useSelector((state) => state.registration.signInForm);
  console.log("user data", userData);

  const inputClassNames = classNames(styles.inputContainer, {
    [styles.error]: !isCorrect,
  });

  return (
    <div className={inputClassNames}>
      <input
        className={styles.input}
        type={inputType === "name" ? "text" : inputType}
        placeholder={initial}
        onBlur={(e) => {
          let validationRes = isValid(e.target.value);

          setCorrect(validationRes);
          validationRes && dispatch(action(e.target.value));
        }}
      />
    </div>
  );
}
