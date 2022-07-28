import React from "react";
import styles from "./styles/app.module.scss";
import { Header } from "../components/header/header";
import { Banner } from "../components/banner/banner";
import {UsersList} from "../components/usersList/usersList";

function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <Banner />
        <div className={styles.workersListWrapper}>
          <UsersList />
        </div>
      </div>
    </div>
  );
}

export default App;
