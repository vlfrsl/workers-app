import React from "react";
import styles from "./styles/upload.module.scss";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

export function UploadItem({ initial, validator, action }) {
  const dispatch = useDispatch();

  const selectedFile = useSelector(
    (state) => state.registration.signInForm.photo
  );

  const [isCorrect, setCorrect] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  const areaClassNames = classNames(styles.uploadContainer, {
    [styles.error]: !isCorrect,
  });

  const fileInput = useRef(null);
  return (
    <div className={areaClassNames} data-error={errMessage}>
      <div className={styles.customUploadArea}>
        <div className={styles.uploadBtn}>
          <button
            onClick={() => {
              fileInput.current.click();
            }}
          >
            Upload
          </button>
        </div>

        <div className={styles.fileName}>
          <span>{selectedFile !== null ? selectedFile.name : initial}</span>
        </div>
      </div>
      <input
        type="file"
        hidden
        ref={fileInput}
        onChange={(e) => {
          const { isValid, message } = validator(e.target.files[0]);
          setCorrect(isValid);

          if (isValid) {
            dispatch(action(e.target.files[0]));
          } else {
            setErrMessage(message);
            dispatch(action(null));
          }
        }}
      />
    </div>
  );
}
