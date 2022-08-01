import React from "react";
import styles from "./styles/app.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import UsersList from "../components/usersList";
import Title from "../components/title";
import Registration from "../components/registration";
import RegistrationSuccess from "../components/registration/registrationSuccess";

import { setDefaultsUsers, setPage } from "../actions/usersActions";
import { fetchUsers } from "../slices/usersSlice";
import { INITIAL_USERS_REQUEST_PARAMS } from "../constants/requestParams";
import { selectIsRegistered } from "../slices/registrationSlice";
import {
  TITLE_REGISTRATION,
  TITLE_USERS_LIST,
} from "../constants/text/textContent";

function App() {
  const dispatch = useDispatch();

  const selectedIsRegistered = useSelector(selectIsRegistered);

  useEffect(() => {
    if (selectedIsRegistered) {
      // if user is registered successfully update list and clean user data
      dispatch(setDefaultsUsers());
      dispatch(fetchUsers(INITIAL_USERS_REQUEST_PARAMS)).then(() =>
        dispatch(setPage(INITIAL_USERS_REQUEST_PARAMS.page + 1))
      );
    }
  }, [selectedIsRegistered]);

  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <Banner />
        <div className={styles.usersListWrapper} id="users">
          <div className={styles.titleWrapper}>
            <Title text={TITLE_USERS_LIST} />
          </div>
          <UsersList />
        </div>

        <div className={styles.usersListWrapper}>
          <div className={styles.titleWrapper}>
            {selectedIsRegistered && <RegistrationSuccess />}
            {!selectedIsRegistered && <Title text={TITLE_REGISTRATION} />}
          </div>
          {!selectedIsRegistered && (
            <div className={styles.registrationWrapper} id="registration">
              <Registration />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
