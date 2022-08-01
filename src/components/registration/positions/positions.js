import React, { useEffect, useState } from "react";
import styles from "./styles/positions.module.scss";
import { useDispatch, useSelector } from "react-redux";
import RadioButton from "./radioButton";
import Loader from "../../loader";
import {
  fetchPositions,
  selectPositions,
  selectStatusRegistration,
} from "../../../slices/registrationSlice";

export function Positions({ handleInput }) {
  const dispatch = useDispatch();

  const selectedPositions = useSelector(selectPositions);
  const status = useSelector(selectStatusRegistration);

  const [selectedPosition, setSelectedPosition] = useState(null);

  useEffect(() => {
    if (selectedPositions.length === 0) {
      dispatch(fetchPositions());
    }
  }, [selectedPositions]);

  useEffect(() => {
    handleInput(selectedPosition);
  }, [selectedPosition]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Select your position</span>
      </div>

      {status === "loading" && selectedPositions.length === 0 && <Loader />}

      {selectedPositions.map((position, idx) => {
        return (
          <RadioButton
            key={idx}
            position={position}
            selected={selectedPosition}
            setSelected={setSelectedPosition}
          />
        );
      })}
    </div>
  );
}
