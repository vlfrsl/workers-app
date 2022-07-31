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
  setDefaultsRegistration,
} from "../../actions/registrationActions";
import {
  nameValidator,
  emailValidator,
  phoneValidator,
  imageValidator,
} from "../../validators/validators";

import { fetchUsers, fetchUsersReload } from "../../slices/usersSlice";
import { RegistrationSuccess } from "./registrationSuccess/registrationSuccess";
import { Error } from "../errorComponent/error";
import { Loader } from "../../loader/loader";
import { setDefaultsUsers } from "../../actions/usersActions";

export function Registration() {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.registration.signInForm);
  const status = useSelector((state) => state.registration.status);
  const isRegistered = useSelector(
    (state) => state.registration.isUserRegistered
  );
  const fetchFailMessage = useSelector(
    (state) => state.registration.fetchFailMessage
  );
  console.log("SELECTED DATA", selectedData);

  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    let isFullInfo = Object.values(selectedData).some(
      (elem) => Boolean(elem) === false
    );
    setCanSubmit(isFullInfo);
  }, [selectedData]);

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.inputsWrapper}>
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
      </div>
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
        {status === "loading" ? (
          <Loader />
        ) : (
          <Button
            text="Sign up"
            disabled={canSubmit}
            callback={() => {
              dispatch(registerUser(selectedData));
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
