import React, { useEffect, useState } from "react";
import styles from "./styles/list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {UserCard} from "../userCard/userCard";
import {fetchUsers} from "../../slices/usersSlice";
import { Button } from "../buttons/button";
import { Loader } from "../../loader/loader";

export function UsersList() {
    const dispatch = useDispatch();

    const selectedUsers = useSelector((state) => state.users.usersList);
    const selectStatus = useSelector((state) => state.users.status);
    const selectIsNext = useSelector((state) => state.users.isNext);

    const [pageNum, setPageNum] = useState(1);
    console.log("USERS", selectedUsers);

    useEffect(() => {
        dispatch(
            fetchUsers({
                page: pageNum,
                limit: 6,
            })
        );
        setPageNum(pageNum + 1);
    }, []);

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
                        callback={() => dispatch(fetchUsers({ page: pageNum, limit: 6 }))}
                        disabled={!selectIsNext}
                    />
                )}
            </div>
        </div>
    );
}
