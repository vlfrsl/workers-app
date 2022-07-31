import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPositions } from "../services/getPositions";
import { getToken } from "../services/getToken";
import { postUser } from "../services/postUser";

const initialState = {
  positions: [],
  status: "idle",
  isRegistered: false,
  fetchFailMessage: null,
};

export const fetchPositions = createAsyncThunk(
  "registration/fetchPositions",
  async () => {
    return getPositions();
  }
);

export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (data, thunkAPI) => {
    try {
      const result = await postUser({ ...data, token: await getToken() });
      return result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const registrationSlice = createSlice({
  name: "registration",
  initialState,

  reducers: {
    setIsRegistered: (state, action) => {
      console.log("REGISTRATION", action.payload);
      state.isRegistered = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPositions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPositions.fulfilled, (state, action) => {
        state.positions = action.payload.positions;
        state.status = "idle";
      })

      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.fetchFailMessage =
          action.payload || "Something went wrong.Try again later";
        state.status = "failed";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "idle";
        state.isRegistered = true;
        console.log("state after registration");
      });
  },
});

export default registrationSlice.reducer;
