import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrdersThunk = createAsyncThunk(
  "orders/getOrders",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/orders/", credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const postOrdersThunk = createAsyncThunk(
  "orders/postOrder",
  async (newOrder, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/orders/", newOrder);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOrdersThunk = createAsyncThunk(
  "orders/deleteOrder",
  async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/orders/${orderId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const putOrdersThunk = createAsyncThunk(
  "orders/updateOrder",
  async ({ orderId, newOrder }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/orders/${orderId}`, newOrder);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
