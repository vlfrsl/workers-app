import React from "react";
import styles from "./styles/app.module.scss";
import { Header } from "../components/header/header";
import { Banner } from "../components/banner/banner";
import {UsersList} from "../components/usersList/usersList";
import {ComponentTitle} from "../components/componentTitle/title";

function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <Banner />
        <div className={styles.workersListWrapper}>
            <div className={styles.titleWrapper}>
                <ComponentTitle text = "Working with GET request"/>
            </div>
          <UsersList />
        </div>
      </div>
    </div>
  );
}

export default App;
