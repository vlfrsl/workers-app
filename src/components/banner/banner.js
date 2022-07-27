import React from "react";
import styles from "./styles/banner.module.scss";
import { Button } from "../buttons/button";

export function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <img src="./assets/banner.png" alt="" />
      <div className={styles.bannerContentWrapper}>
        <div className={styles.bannerContentContainer}>
          <span className={styles.title}>
            Test assignment for front-end developer
          </span>
          <span className={styles.text}>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </span>
          <div className={styles.buttonContainer}>
            <Button
              text="Sign up"
              callback={() => {
                console.log("Banner sign up");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
