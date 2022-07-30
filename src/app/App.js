import React from "react";
import styles from "./styles/app.module.scss";
import { Header } from "../components/header/header";
import { Banner } from "../components/banner/banner";
import { UsersList } from "../components/usersList/usersList";
import { ComponentTitle } from "../components/componentTitle/title";
import { Registration } from "../components/registration/registration";
import { useSelector } from "react-redux";
import { RegistrationSuccess } from "../components/registration/registrationSuccess/registrationSuccess";

function App() {
  const selectIsRegistered = useSelector(
    (state) => state.registration.isUserRegistered
  );

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
          <div className={styles.registrationWrapper} id="registration">
            {!selectIsRegistered && <Registration />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
