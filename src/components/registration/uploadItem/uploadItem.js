import React from "react";
import styles from "./styles/upload.module.scss";
import { useState, useRef } from "react";

export function UploadItem() {
  const [file, setFile] = useState();
  const fileInput = useRef(null);
  return (
    <div className={styles.uploadContainer}>
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
          <span>Upload your photo</span>
        </div>
      </div>
      <input type="file" hidden ref={fileInput} />
    </div>
  );
}
