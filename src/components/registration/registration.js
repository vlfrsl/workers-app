import React, { useEffect, useState } from "react";
import styles from "./style/registration.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../slices/registrationSlice";
import { Input } from "./input/input";
import { Button } from "../buttons/button";
import { UploadItem } from "./uploadItem/uploadItem";
import { Positions } from "./positions/positions";

import {
  nameValidator,
  emailValidator,
  phoneValidator,
  imageValidator,
} from "../../validators/validators";

import { Error } from "../errorComponent/error";
import { Loader } from "../../loader/loader";
import { REGISTER_REQUIRED_DATA } from "../../constants/registerUserDataRequired";

const isDataFull = (data) => {
  const requiredKeys = Object.keys(REGISTER_REQUIRED_DATA);

  const result = requiredKeys.every((requiredKey) => {
    return !!data[requiredKey] && !!data[requiredKey];
  });

  return result;
};

export function Registration() {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.registration.signInForm);
  const status = useSelector((state) => state.registration.status);

  const fetchFailMessage = useSelector(
    (state) => state.registration.fetchFailMessage
  );

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
        />
      </div>
      <div className={styles.hint}>
        <span>+38 (XXX) XXX - XX - XX</span>
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
