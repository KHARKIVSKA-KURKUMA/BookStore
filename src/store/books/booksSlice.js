import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "./booksOperation";
import {
  deleteBooksThunk,
  getBooksThunk,
  getPublishedBooksThunk,
  postBooksThunk,
  putBooksThunk,
} from "./booksThunks";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksThunk.fulfilled, (state, { payload }) => {
        state.books = [...payload];
      })
      .addCase(getPublishedBooksThunk.fulfilled, (state, { payload }) => {
        state.books = [...payload];
      })
      .addCase(postBooksThunk.fulfilled, (state, { payload }) => {
        state.books.push(payload);
      })
      .addCase(deleteBooksThunk.fulfilled, (state, { meta }) => {
        const index = state.books.findIndex((book) => book._id === meta.arg);
        state.books.splice(index, 1);
      })
      .addCase(putBooksThunk.fulfilled, (state, { payload }) => {
        const index = state.books.findIndex((book) => book._id === payload._id);
        state.books.splice(index, 1, payload);
      })
      .addMatcher(
        isAnyOf(
          getBooksThunk.pending,
          getPublishedBooksThunk.pending,
          postBooksThunk.pending,
          deleteBooksThunk.pending,
          putBooksThunk.pending
        ),
        handlePending
      )
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});

export const booksReducer = booksSlice.reducer;
