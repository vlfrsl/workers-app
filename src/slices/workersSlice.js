import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../services/getUsers";

const initialState = {
  workers: [],
  isNext: true,
  status: "idle",
};

export const fetchWorkers = createAsyncThunk(
  "workers/fetchWorkers",
  async (data) => {
    return getUsers(data);
  }
);

export const workersSlice = createSlice({
  name: "workers",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkers.pending, (state) => {
        console.log("loading");
        state.status = "loading";
      })
      .addCase(fetchWorkers.fulfilled, (state, action) => {
        console.log("Loaded");

        state.workers = [...state.workers, ...action.payload.users];
        console.log("is", action.payload.links.next_url);
        state.next = action.payload.links.next_url ? true : false;

        console.log(action.payload);
        state.status = "idle";
      });
  },
});

export default workersSlice.reducer;
