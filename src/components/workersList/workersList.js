import React, { useEffect, useState } from "react";
import styles from "./styles/list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { WorkerCard } from "../../workerCard/workerCard";
import { fetchWorkers } from "../../slices/workersSlice";
import { Button } from "../buttons/button";
import { Loader } from "../../loader/loader";

export function WorkersList({}) {
  const dispatch = useDispatch();

  const selectedUsers = useSelector((state) => state.workers.workers);
  const selectStatus = useSelector((state) => state.workers.status);
  const selectIsNext = useSelector((state) => state.workers.isNext);
  console.log("USERS", selectedUsers);

  useEffect(() => {
    dispatch(fetchWorkers());
  }, []);

  return (
    <div className={styles.listContainer}>
      {selectedUsers.map((user, idx) => {
        return <WorkerCard key={idx} data={user} />;
      })}

      <div className={styles.loadButtonContainer}>
        {selectStatus === "loading" ? (
          <Loader />
        ) : (
          <Button
            text="Load more"
            callback={() => dispatch(fetchWorkers())}
            disabled={!selectIsNext}
          />
        )}
      </div>
    </div>
  );
}
