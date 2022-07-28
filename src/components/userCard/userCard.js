import React from "react";
import styles from './styles/card.module.scss'

export function UserCard({ data }) {
    const { name, email, phone, photo, position } = data;

    return (
        <div className={styles.card}>
            <div className={styles.avatarContainer}>
                <img src={photo || "./assets/icons/defaultAvatar.svg"} alt="photo" />
            </div>
            <div className={styles.nameContainer}>
                <span>{name}</span>
            </div>
            <div className={styles.info}>
                <div className={styles.position}>
                    <span>{position}</span>
                </div>
                <div className={styles.email}>
                    <span>{email}</span>
                </div>
                <div className={styles.phone}>
                    <span>{phone}</span>
                    {/*<span>+38</span>*/}
                    {/*<span>(098)</span>*/}
                    {/*<span>278</span>*/}
                    {/*<span>44</span>*/}
                    {/*<span>23</span>*/}
                </div>
            </div>
        </div>
    );
}
