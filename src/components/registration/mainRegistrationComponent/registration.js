import React, { useEffect, useState } from "react";
import styles from "./styles/registration.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Input from "../input";
import Button from "../../buttons";
import Positions from "../positions";
import UploadItem from "../uploadItem";
import Error from "../../errorComponent";
import Loader from "../../loader";
import {
  registerUser,
  selectErrMessageRegistration,
  selectStatusRegistration,
} from "../../../slices/registrationSlice";

import {
  nameValidator,
  emailValidator,
  phoneValidator,
  imageValidator,
} from "../../../validators/validators";
import { isDataFull } from "../../../helpers/isDataFull";

export function Registration() {
  const dispatch = useDispatch();

  const status = useSelector(selectStatusRegistration);
  const fetchFailMessage = useSelector(selectErrMessageRegistration);

  const [canSubmit, setCanSubmit] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setCanSubmit(isDataFull(userData));
  }, [userData]);

  const inputHandler = (type) => {
    return (value) => {
      const data = {};
      data[type] = value;
      data.type = setUserData({ ...userData, ...data });
    };
  };

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.inputsWrapper}>
        <Input
          placeHolder="Your name"
          validator={nameValidator}
          handelInput={inputHandler("name")}
        />
        <Input
          placeHolder="Email"
          validator={emailValidator}
          handelInput={inputHandler("email")}
        />
        <Input
          placeHolder="Phone"
          validator={phoneValidator}
          handelInput={inputHandler("phone")}
          hint="+38 (XXX) XXX - XX - XX"
        />
      </div>

      <div className={styles.positionsWrapper}>
        <Positions handleInput={inputHandler("positionId")} />
      </div>

      <div className={styles.uploadWrapper}>
        <UploadItem
          initial="Upload your photo"
          handleInput={inputHandler("photo")}
          validator={imageValidator}
        />
      </div>

      <div className={styles.buttonWrapper}>
        {status === "loading" ? (
          <Loader />
        ) : (
          <Button
            text="Sign up"
            disabled={!canSubmit}
            callback={() => {
              dispatch(registerUser(userData));
            }}
          />
        )}
      </div>

      {status === "failed" && (
        <div className={styles.errorWrapper}>
          <Error message={fetchFailMessage} />
        </div>
      )}
    </div>
  );
}
