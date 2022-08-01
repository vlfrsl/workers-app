import React from "react";
import styles from "./styles/radioButton.module.scss";

export function RadioButton({ position, selected, setSelected }) {
  return (
    <div className={styles.radioButtonContainer}>
      <input
        type="radio"
        id={position.id}
        value={position.id}
        checked={+position.id === +selected}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      />
      <label htmlFor={position.id}>{position.name}</label>
    </div>
  );
}
