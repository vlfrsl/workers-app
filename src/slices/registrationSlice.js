import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPositions } from "../services/getPositions";

const initialState = {
  positions: [],
  status: "idle",

  signInForm: {
    name: "",
    email: "",
    phone: "",
    positionId: -1,
    photo: null,
  },
};

export const fetchPositions = createAsyncThunk(
  "registration/fetchPositions",
  async () => {
    return getPositions();
  }
);

export const registrationSlice = createSlice({
  name: "registration",
  initialState,

  reducers: {
    setPositionId(state, action) {
      state.signInForm.positionId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPositions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPositions.fulfilled, (state, action) => {
        console.log("loaded", action.payload);
        state.positions = action.payload.positions;

        state.status = "idle";
      });
    // .addCase(fetchPositions.pending, (state) => {
    //   console.log("REGISTER LOADING");
    //   state.status = "loading";
    // })
    // .addCase(fetchPositions.fulfilled, (state, action) => {
    //   state.status = "idle";
    //   console.log("REGISTER LOADED");
    // });
  },
});

export default registrationSlice.reducer;
