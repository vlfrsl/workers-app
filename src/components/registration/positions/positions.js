import React, { useEffect, useState } from "react";
import styles from "./styles/positions.module.scss";
import { fetchPositions } from "../../../slices/registrationSlice";
import { useDispatch, useSelector } from "react-redux";
import { RadioButton } from "./radioButton/radioButton";

export function Positions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPositions());
  }, []);

  const status = useSelector((state) => state.registration.status);
  const selectedPositions = useSelector(
    (state) => state.registration.positions
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Select your position</span>
      </div>

      {selectedPositions.map((position, idx) => {
        return <RadioButton key={idx} position={position} />;
      })}
    </div>
  );
}
