import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export function Loader() {
  return (
    <div
      style={{
        width: 100 + "%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ClipLoader color="#00BDD3" size="48px" />
    </div>
  );
}
