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
    setDefaults(state) {
      state.signInForm = {
        name: null,
        email: null,
        phone: null,
        positionId: null,
        photo: null,
      };
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
      .addCase(registerUser.rejected, (state, action) => {
        console.log("REGISTER FAILED");
        // console.log("ERRR mesage", action.payload);
        state.fetchFailMessage =
          action.payload || "Something went wrong.Try again later";
        state.status = "failed";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "idle";
        state.isUserRegistered = true;
        console.log("state after registration", state.isUserRegistered);
        //console.log("REGISTER LOADED, STATUS", state.signInForm);
      });
  },
});

export default registrationSlice.reducer;
