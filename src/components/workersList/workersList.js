import React, { useEffect, useState } from "react";
import styles from "./styles/list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { WorkerCard } from "../../workerCard/workerCard";
import { fetchWorkers } from "../../slices/workersSlice";

export function WorkersList({}) {
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(true);

  const selectedUsers = useSelector((state) => state.workers.workers);
  console.log("USERS", selectedUsers);

  useEffect(() => {
    dispatch(fetchWorkers()).then(() => setFetching(false));
  }, []);

  return (
    <div className={styles.listContainer}>
      {/*<WorkerCard />*/}
      {/*<WorkerCard />*/}
      {/*<WorkerCard />*/}
      {/*<WorkerCard />*/}
      {/*<WorkerCard />*/}
      {/*<WorkerCard />*/}
    </div>
  );
}
