import React, { useEffect } from "react";
import styles from "./styles/positions.module.scss";
import { fetchPositions } from "../../../slices/registrationSlice";
import { useDispatch, useSelector } from "react-redux";
import { RadioButton } from "./radioButton/radioButton";
import { Loader } from "../../../loader/loader";

export function Positions() {
  const dispatch = useDispatch();

  const selectedPositions = useSelector(
    (state) => state.registration.positions
  );

  useEffect(() => {
    if (selectedPositions.length === 0) {
      dispatch(fetchPositions());
    }
  }, [selectedPositions]);

  const status = useSelector((state) => state.registration.status);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Select your position</span>
      </div>

      {status === "loading" && selectedPositions.length === 0 && <Loader />}

      {selectedPositions.map((position, idx) => {
        return <RadioButton key={idx} position={position} />;
      })}
    </div>
  );
}
