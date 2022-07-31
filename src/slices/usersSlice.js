import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../services/getUsers";
import { INITIAL_USERS_REQUEST_PARAMS } from "../constants/requestParams";

const initialState = {
  usersList: [],
  requestParams: {
    ...INITIAL_USERS_REQUEST_PARAMS,
  },
  isNext: true,
  status: "idle",
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (queryParams, thunkAPI) => {
    try {
      const result = await getUsers(queryParams);
      return result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchUsersReload = createAsyncThunk(
  "users/fetchUsersReload",
  async () => {
    return getUsers(INITIAL_USERS_REQUEST_PARAMS);
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    setPage: (state, action) => {
      state.requestParams.page = action.payload;
    },
    setCount: (state, action) => {
      state.requestParams.count = action.payload;
    },
    setDefaults: (state) => {
      state.usersList = [];
      state.requestParams = { ...INITIAL_USERS_REQUEST_PARAMS };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log("fail");
        state.status = "failed";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersList = [...state.usersList, ...action.payload.users];
        state.isNext = !!action.payload.links.next_url;
        state.status = "idle";
      })

      .addCase(fetchUsersReload.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersReload.fulfilled, (state, action) => {
        state.usersList = action.payload.users;
        state.isNext = !!action.payload.links.next_url;

        state.requestParams.page = 2;
        state.requestParams.count = 6;

        state.status = "idle";
      });
  },
});

export default usersSlice.reducer;
