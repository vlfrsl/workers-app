import React from "react";
import styles from "./styles/card.module.scss";

export function WorkerCard() {
  console.log("styles", styles);
  return (
    <div className={styles.card}>
      <div className={styles.avatarContainer}>
        <img src="./assets/icons/defaultAvatar.svg" alt="photo" />
      </div>
      <div className={styles.nameContainer}>
        <span>Salvador Stewart Flynn</span>
      </div>
      <div className={styles.info}>
        <div className={styles.position}>
          <span>Frontend developer dddddddddddddddddddddddddddddds</span>
        </div>
        <divs className={styles.email}>
          <span>fronend_develop@gmail.com </span>
        </divs>
        <div className={styles.phone}>
          <span>+38</span>
          <span>(098)</span>
          <span>278</span>
          <span>44</span>
          <span>23</span>
        </div>
      </div>
    </div>
  );
}
