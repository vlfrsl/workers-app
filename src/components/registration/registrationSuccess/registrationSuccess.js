import React from "react";
import styles from "./styles/registrationSuccess.module.scss";
import { ComponentTitle } from "../../componentTitle/title";
import { Button } from "../../buttons/button";
import { useDispatch } from "react-redux";
import { setIsRegistered } from "../../../actions/registrationActions";

export function RegistrationSuccess() {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <ComponentTitle text="User successfully registered" />

      <div className={styles.imageContainer}>
        <img src="./assets/success-registration.png" alt="" />
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          text="Again"
          callback={() => {
            dispatch(setIsRegistered(false));
          }}
        />
      </div>
    </div>
  );
}
