import React, { useEffect, useState } from "react";
import styles from "./styles/list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "../userCard/userCard";
import { fetchUsers } from "../../slices/usersSlice";
import { Button } from "../buttons/button";
import { Loader } from "../../loader/loader";
import { setPage } from "../../actions/usersActions";

export function UsersList() {
  const dispatch = useDispatch();

  const selectedUsers = useSelector((state) => state.users.usersList);
  const selectStatus = useSelector((state) => state.users.status);
  const selectIsNext = useSelector((state) => state.users.isNext);
  const selectedPage = useSelector((state) => state.users.requestParams.page);
  const selectedLimit = useSelector((state) => state.users.requestParams.limit);

  const stateSelector = useSelector((state) => state.users);

  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      dispatch(
        fetchUsers({
          page: selectedPage,
          limit: selectedLimit,
        })
      ).then(() => {
        dispatch(setPage(selectedPage + 1));
        setFetching(false);
      });
    }
  }, [fetching]);

  return (
    <div className={styles.listContainer}>
      {selectedUsers.map((user, idx) => {
        return <UserCard key={idx} data={user} />;
      })}

      <div className={styles.loadButtonContainer}>
        {selectStatus === "loading" ? (
          <Loader />
        ) : (
          <Button
            text="Load more"
            callback={() => setFetching(true)}
            disabled={!selectIsNext}
          />
        )}
      </div>
    </div>
  );
}
