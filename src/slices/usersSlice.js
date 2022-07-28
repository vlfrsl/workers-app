import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../services/getUsers";
import {postUser} from "../services/postUser";

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

export const registerUser = createAsyncThunk(
    "users/registerUser",
    async (data) => {
        return postUser(data);
    }
);



export const usersSlice = createSlice({
    name: "users",
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.usersList = [...state.usersList, ...action.payload.users];
                state.next = action.payload.links.next_url ? true : false;

                state.status = "idle";
            })
            .addCase(registerUser.pending, (state) => {
                console.log("REGISTER LOADING")
                state.status = "loading";
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = "idle";
                console.log("REGISTER LOADED")
            })
    },
});

export default usersSlice.reducer;
