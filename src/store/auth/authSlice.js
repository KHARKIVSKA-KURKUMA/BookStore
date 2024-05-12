import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCurrentUser, logIn, logOut, register } from "./authThunks";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  handleFulfilled,
  handleLogout,
  handlePending,
  handleRejected,
} from "./authOperation";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: null,
    isLoading: false,
    isLoggedIn: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher(isAnyOf(register.pending, logIn.pending), handlePending)
      .addMatcher(isAnyOf(register.fulfilled, logIn.fulfilled), handleFulfilled)
      .addMatcher(
        isAnyOf(logOut.fulfilled, logOut.rejected, logOut.pending),
        handleLogout
      );
  },
});

const authReducer = authSlice.reducer;

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isLoggedIn", "user"],
};

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
