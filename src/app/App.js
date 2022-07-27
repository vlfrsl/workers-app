import React from "react";
import styles from "./styles/app.module.scss";
import { Header } from "../components/header/header";
import { Banner } from "../components/banner/banner";

function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <Banner />
      </div>
    </div>
  );
}

export default App;
