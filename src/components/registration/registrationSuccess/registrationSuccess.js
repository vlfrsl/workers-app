import React from "react";
import { useDispatch } from "react-redux";
import styles from "./styles/registrationSuccess.module.scss";
import Title from "../../title";
import Button from "../../buttons";
import { setIsRegistered } from "../../../actions/registrationActions";

export function RegistrationSuccess() {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Title text="User successfully registered" />

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
