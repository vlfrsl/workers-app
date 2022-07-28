import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../services/getUsers";

const initialState = {
    usersList: [],
    isNext: true,
    status: "idle",
};

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (data) => {
        return getUsers(data);
    }
);

export const usersSlice = createSlice({
    name: "users",
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                console.log("loading");
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                console.log("Loaded");

                state.usersList = [...state.usersList, ...action.payload.users];
                console.log("is", action.payload.links.next_url);
                state.next = action.payload.links.next_url ? true : false;

                console.log(action.payload);
                state.status = "idle";
            });
    },
});

export default usersSlice.reducer;
