import React, { useEffect, useState } from "react";
import styles from "./style/registration.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../slices/registrationSlice";
import { Input } from "./input/input";
import { Button } from "../buttons/button";
import { UploadItem } from "./uploadItem/uploadItem";
import { Positions } from "./positions/positions";

import {
  setName,
  setEmail,
  setPhone,
  setUploadPhoto,
} from "../../actions/registrationActions";
import {
  nameValidator,
  emailValidator,
  phoneValidator,
  imageValidator,
} from "../../validators/validators";

import { fetchUsersReload } from "../../slices/usersSlice";
import { RegistrationSuccess } from "./registrationSuccess/registrationSuccess";
import { Error } from "../errorComponent/error";

export function Registration() {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.registration.signInForm);
  const status = useSelector((state) => state.registration.status);
  const fetchFailMessage = useSelector(
    (state) => state.registration.fetchFailMessage
  );
  console.log("SELECTED DATA", selectedData);
  const selectIsRegistered = useSelector(
    (state) => state.registration.isUserRegistered
  );

  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    let isFullInfo = Object.values(selectedData).some(
      (elem) => Boolean(elem) === false
    );
    setCanSubmit(isFullInfo);
  }, [selectedData]);

  return (
    <div className={styles.registrationContainer}>
      <form className={styles.inputsWrapper}>
        <Input
          placeHolder="Your name"
          validator={nameValidator}
          value={selectedData.name}
          action={setName}
        />
        <Input
          placeHolder="Email"
          validator={emailValidator}
          value={selectedData.email}
          action={setEmail}
        />
        <Input
          placeHolder="Phone"
          validator={phoneValidator}
          value={selectedData.phone}
          action={setPhone}
        />
      </form>
      <div className={styles.hint}>
        <span>+38 (XXX) XXX - XX - XX</span>
      </div>

      <div className={styles.positionsWrapper}>
        <Positions value={selectedData.positionId} />
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
          disabled={canSubmit}
          callback={() => {
            dispatch(registerUser(selectedData)).then(() => {
              dispatch(fetchUsersReload());
            });
          }}
        />
      </div>
      {status === "failed" && (
        <div className={styles.errorWrapper}>
          <Error message={fetchFailMessage} />
        </div>
      )}
    </div>
  );
}
