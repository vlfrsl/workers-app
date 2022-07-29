import React, { useRef, useState } from "react";
import styles from "./style/registration.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../slices/usersSlice";
import { Input } from "./input/input";
import { Button } from "../buttons/button";
import { UploadItem } from "./uploadItem/uploadItem";
import { Positions } from "./positions/positions";

import {
  setName,
  setEmail,
  setPhone,
  setUploadPhoto,
} from "../../actions/actions";
import {
  nameValidator,
  emailValidator,
  phoneValidator,
  imageValidator,
} from "../../validators/validators";

export function Registration() {
  const dispatch = useDispatch();
  const selectedUserInfo = useSelector(
    (state) => state.registration.signInForm
  );
  let isFullInfo = Object.values(selectedUserInfo).some(
    (elem) => Boolean(elem) === false
  );
  console.log("info", selectedUserInfo);
  // console.log("is full info", isFullInfo);

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.inputsWrapper}>
        <Input
          initial="Your name"
          inputType="text"
          action={setName}
          validator={nameValidator}
        />
        <Input
          initial="Email"
          inputType="email"
          action={setEmail}
          validator={emailValidator}
        />
        <Input
          initial="Phone"
          inputType="tel"
          action={setPhone}
          validator={phoneValidator}
        />
      </div>
      <div className={styles.hint}>
        <span>+38 (XXX) XXX - XX - XX</span>
      </div>

      <div className={styles.positionsWrapper}>
        <Positions />
      </div>

      <div className={styles.uploadWrapper}>
        <UploadItem
          initial="Upload your photo"
          action={setUploadPhoto}
          validator={imageValidator}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <Button
          text="Sign up"
          disabled={isFullInfo}
          callback={() => {
            console.log("SIGN");
          }}
        />
      </div>
    </div>
  );
}
