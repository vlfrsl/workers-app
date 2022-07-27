import React from "react";
import styles from "./styles/header.module.scss";
import { Button } from "../buttons/button";
import { Logo } from "../logo/logo";

export function Header() {
  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.navigationContainer}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={styles.buttonsContainer}>
          <Button text="Users" callback={() => console.log("USERS")} />
          <Button text="Sign up" callback={() => console.log("SIGN UP")} />
        </div>
      </div>
    </div>
  );
}
