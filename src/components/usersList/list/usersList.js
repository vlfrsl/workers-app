import React, { useEffect, useState } from "react";
import styles from "./styles/list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../userCard";
import Button from "../../buttons";
import Loader from "../../loader";
import Error from "../../errorComponent";
import { setPage } from "../../../actions/usersActions";

import {
  fetchUsers,
  selectStatusUsers,
  selectUsersList,
  selectIsNext,
  selectRequestParams,
} from "../../../slices/usersSlice";

export function UsersList() {
  const dispatch = useDispatch();

  const selectedUsers = useSelector(selectUsersList);
  const selectedStatus = useSelector(selectStatusUsers);
  const selectedIsNext = useSelector(selectIsNext);
  const selectedRequestParams = useSelector(selectRequestParams);

  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      dispatch(fetchUsers(selectedRequestParams)).then(() => {
        dispatch(setPage(selectedRequestParams.page + 1));
        setFetching(false);
      });
    }
  }, [fetching]);

  if (selectedStatus === "failed") {
    return <Error message="ERROR. Can not load." />;
  }

  return (
    <div className={styles.listContainer}>
      {selectedUsers.map((user, idx) => {
        return <UserCard key={idx} data={user} />;
      })}

      <div className={styles.loadButtonContainer}>
        {selectedStatus === "loading" ? (
          <Loader />
        ) : (
          <Button
            text="Show more"
            callback={() => setFetching(true)}
            hidden={!selectedIsNext}
          />
        )}
      </div>
    </div>
  );
}
