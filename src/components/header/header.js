import React from "react";
import styles from "./styles/header.module.scss";
import Button from "../buttons";
import Logo from "./logo";

export function Header() {
  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.navigationContainer}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            text="Users"
            callback={() => {
              const el = document.getElementById("users");
              el.scrollIntoView();
            }}
          />
          <Button
            text="Sign up"
            callback={() => {
              const el = document.getElementById("registration");
              el.scrollIntoView();
            }}
          />
        </div>
      </div>
    </div>
  );
}
