// router.post("/", IsAuth, controllersBox(ctrl.postBook));
// router.get("/", controllersBox(ctrl.getBooks));
// router.get("/:bookId", IsAuth, controllersBox(ctrl.getBookById));
// router.get(
//   "/published/:authorId",
//   IsAuth,
//   controllersBox(ctrl.getAuthorPublishedBooks)
// );
// router.put("/:bookId", IsAuth, controllersBox(ctrl.putBook));
// router.delete("/:bookId", IsAuth, controllersBox(ctrl.deleteBook));

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooksThunk = createAsyncThunk(
  "books/getBooks",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/books/", credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getPublishedBooksThunk = createAsyncThunk(
  "books/getPublishedBooks",
  async (authorId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/books/published/${authorId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const postBooksThunk = createAsyncThunk(
  "books/postBook",
  async (newBook, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/books/", newBook);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBooksThunk = createAsyncThunk(
  "books/deleteBook",
  async (bookId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/books/${bookId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const putBooksThunk = createAsyncThunk(
  "books/updateBook",
  async ({ bookId, newBook }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/books/${bookId}`, newBook);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
