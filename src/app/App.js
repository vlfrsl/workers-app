import React from "react";
import styles from "./styles/app.module.scss";
import { Header } from "../components/header/header";

function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
    </div>
  );
}

export default App;
