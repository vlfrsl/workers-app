import React from "react";
import styles from "./styles/list.module.scss";
import { WorkerCard } from "../../workerCard/workerCard";

export function WorkersList() {
  return (
    <div className={styles.listContainer}>
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
    </div>
  );
}
