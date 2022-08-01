import React, { useEffect, useState } from "react";
import styles from "./styles/list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "../userCard/userCard";
import { fetchUsers } from "../../slices/usersSlice";
import { Button } from "../buttons/button";
import { Loader } from "../../loader/loader";
import { setPage } from "../../actions/usersActions";
import { Error } from "../errorComponent/error";

export function UsersList() {
  const dispatch = useDispatch();

  const selectedUsers = useSelector((state) => state.users.usersList);
  const selectStatus = useSelector((state) => state.users.status);
  const selectIsNext = useSelector((state) => state.users.isNext);
  const requestParams = useSelector((state) => state.users.requestParams);
  // const selectedPage = useSelector((state) => state.users.requestParams.page);
  // const selectedCount = useSelector((state) => state.users.requestParams.count);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      dispatch(fetchUsers(requestParams)).then(() => {
        dispatch(setPage(requestParams.page + 1));
        setFetching(false);
      });
    }
  }, [fetching]);

  if (selectStatus === "failed") {
    return <Error message="ERROR. Can not load." />;
  }

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
            text="Show more"
            callback={() => setFetching(true)}
            disabled={!selectIsNext}
          />
        )}
      </div>
    </div>
  );
}
