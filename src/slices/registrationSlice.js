import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPositions } from "../services/getPositions";
import { getToken } from "../services/getToken";
import { postUser } from "../services/postUser";

const initialState = {
  positions: [],
  status: "idle",
  isUserRegistered: false,

  signInForm: {
    name: null,
    email: null,
    phone: null,
    positionId: null,
    photo: null,
  },
};

const defaultState = { ...initialState };

export const fetchPositions = createAsyncThunk(
  "registration/fetchPositions",
  async () => {
    return getPositions();
  }
);

export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (data) => {
    return await postUser({
      ...data,
      token: await getToken(),
    });
  }
);

export const registrationSlice = createSlice({
  name: "registration",
  initialState,

  reducers: {
    setName(state, action) {
      state.signInForm.name = action.payload;
    },
    setEmail(state, action) {
      state.signInForm.email = action.payload;
    },
    setPhone(state, action) {
      state.signInForm.phone = action.payload;
    },
    setPositionId(state, action) {
      state.signInForm.positionId = action.payload;
    },
    setUploadPhoto(state, action) {
      state.signInForm.photo = action.payload;
    },

    setIsRegistered(state, action) {
      state.isUserRegistered = action.payload;
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
      })
      .addCase(registerUser.pending, (state) => {
        console.log("REGISTER LOADING");
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state) => {
        console.log("state after registration", state);
        state.status = "idle";
        state.signInForm = {
          name: null,
          email: null,
          phone: null,
          positionId: null,
          photo: null,
        };
        state.isUserRegistered = true;
        console.log("REGISTER LOADED, STATUS", state.signInForm);
      });
  },
});

export default registrationSlice.reducer;
