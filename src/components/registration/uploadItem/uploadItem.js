import React from "react";
import styles from "./styles/upload.module.scss";
import { useState, useRef } from "react";
import classNames from "classnames";

export function UploadItem({ initial, validator, handleInput }) {
  const [isCorrect, setCorrect] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const [fileName, setFileName] = useState("");

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
          <span>{fileName ? fileName : initial}</span>
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
            handleInput(e.target.files[0]);
            setFileName(e.target.files[0].name);
          } else {
            setErrMessage(message);
            handleInput(null);
            setFileName("");
          }
        }}
      />
    </div>
  );
}
