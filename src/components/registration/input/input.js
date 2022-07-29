import React, { useEffect, useState } from "react";
import styles from "./styles/input.module.scss";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

export function Input({ inputType, initial, action, validator }) {
  const dispatch = useDispatch();
  const [isCorrect, setCorrect] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  // const userData = useSelector((state) => state.registration.signInForm);
  // console.log("user data", userData);

  const inputClassNames = classNames(styles.inputContainer, {
    [styles.error]: !isCorrect,
  });

  return (
    <div className={inputClassNames} data-error={errMessage}>
      <input
        className={styles.input}
        type={inputType === "name" ? "text" : inputType}
        placeholder={initial}
        onBlur={(e) => {
          const { isValid, message } = validator(e.target.value);
          setCorrect(isValid);

          if (isValid) {
            dispatch(action(e.target.value));
          } else {
            dispatch(action(""));
            setErrMessage(message);
          }
        }}
      />
    </div>
  );
}
