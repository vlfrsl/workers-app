import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../services/getUsers";

const initialState = {
  usersList: [],
  requestParams: {
    page: 1,
    limit: 6,
  },
  isNext: true,
  status: "idle",
};

const defaultState = { ...initialState };

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (data) => {
  return getUsers(data);
});

export const fetchUsersReload = createAsyncThunk(
  "users/fetchUsersReload",
  async () => {
    return getUsers({ page: 1, limit: 6 });
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    setPage: (state, action) => {
      state.requestParams.page = action.payload;
    },
    setLimit: (state, action) => {
      state.requestParams.limit = action.payload;
    },
    setDefaults: (state) => {
      state = defaultState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersList = [...state.usersList, ...action.payload.users];
        state.isNext = !!action.payload.links.next_url; //? true : false;

        state.status = "idle";
      })

      .addCase(fetchUsersReload.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersReload.fulfilled, (state, action) => {
        state.usersList = action.payload.users;
        state.isNext = !!action.payload.links.next_url;
        state.requestParams.page = 2;
        state.requestParams.limit = 6;

        state.status = "idle";
      });
  },
});

export default usersSlice.reducer;
