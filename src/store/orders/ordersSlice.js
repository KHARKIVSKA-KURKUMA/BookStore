import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  deleteOrdersThunk,
  getOrdersThunk,
  postOrdersThunk,
  putOrdersThunk,
} from "./ordersThunk";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersThunk.fulfilled, (state, { payload }) => {
        state.orders = [...payload];
      })
      .addCase(postOrdersThunk.fulfilled, (state, { payload }) => {
        state.orders.push(payload);
      })
      .addCase(deleteOrdersThunk.fulfilled, (state, { meta }) => {
        const index = state.orders.findIndex((book) => book._id === meta.arg);
        state.orders.splice(index, 1);
      })
      .addCase(putOrdersThunk.fulfilled, (state, { payload }) => {
        const index = state.orders.findIndex(
          (book) => book._id === payload._id
        );
        state.orders.splice(index, 1, payload);
      })
      .addMatcher(
        isAnyOf(
          getOrdersThunk.pending,
          postOrdersThunk.pending,
          deleteOrdersThunk.pending,
          putOrdersThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const ordersReducer = ordersSlice.reducer;
