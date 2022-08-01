import React from "react";
import styles from "./styles/banner.module.scss";
import Button from "../buttons";
import Title from "../title";
import Text from "../text";
import { TEXT_BANNER } from "../../constants/text/textContent";
import { TITLE_BANNER } from "../../constants/text/textContent";

export function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <img src="./assets/banner.png" alt="" />
      <div className={styles.bannerContentWrapper}>
        <div className={styles.bannerContentContainer}>
          <div className={styles.titleWrapper}>
            <Title text={TITLE_BANNER} />
          </div>
          <span className={styles.textWrapper}>
            <Text text={TEXT_BANNER} />
          </span>
          <div className={styles.buttonContainer}>
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
    </div>
  );
}
