import React from "react";
import styles from "./styles/app.module.scss";
import { Header } from "../components/header/header";
import { Banner } from "../components/banner/banner";
import { UsersList } from "../components/usersList/usersList";
import { ComponentTitle } from "../components/componentTitle/title";
import { Registration } from "../components/registration/registration";
import { useDispatch, useSelector } from "react-redux";
import { RegistrationSuccess } from "../components/registration/registrationSuccess/registrationSuccess";
import { useEffect } from "react";
import { setDefaultsRegistration } from "../actions/registrationActions";
import { setDefaultsUsers, setPage } from "../actions/usersActions";
import { fetchUsers } from "../slices/usersSlice";
import { INITIAL_USERS_REQUEST_PARAMS } from "../constants/requestParams";

function App() {
  const dispatch = useDispatch();

  const requestParams = useSelector((state) => state.users.requestParams);
  const selectIsRegistered = useSelector(
    (state) => state.registration.isUserRegistered
  );
  useEffect(() => {
    if (selectIsRegistered) {
      // if user is registered successfully update list and clean user data
      dispatch(setDefaultsRegistration());
      dispatch(setDefaultsUsers());
      dispatch(fetchUsers(INITIAL_USERS_REQUEST_PARAMS)).then(() =>
        dispatch(setPage(requestParams.page + 1))
      );
    }
  }, [selectIsRegistered]);

  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <Banner />
        <div className={styles.usersListWrapper} id="users">
          <div className={styles.titleWrapper}>
            <ComponentTitle text="Working with GET request" />
          </div>
          <UsersList />
        </div>

        <div className={styles.usersListWrapper}>
          <div className={styles.titleWrapper}>
            {selectIsRegistered && <RegistrationSuccess />}
            {!selectIsRegistered && (
              <ComponentTitle text="Working with POST request " />
            )}
          </div>
          {!selectIsRegistered && (
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
