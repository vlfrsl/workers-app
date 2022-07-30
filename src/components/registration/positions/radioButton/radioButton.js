import React from "react";
import styles from "./styles/radioButton.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { setPositionId } from "../../../../actions/registrationActions";

export function RadioButton({ position }) {
  const dispatch = useDispatch();
  const selectedId = useSelector(
    (state) => state.registration.signInForm.positionId
  );

  return (
    <div className={styles.radioButtonContainer}>
      <input
        type="radio"
        id={position.id}
        value={position.id}
        checked={+position.id === +selectedId}
        onChange={(e) => {
          dispatch(setPositionId(e.target.value));
        }}
      />
      <label htmlFor={position.id}>{position.name}</label>
    </div>
  );
}
