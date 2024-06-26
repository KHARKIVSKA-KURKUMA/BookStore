import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistedAuthReducer } from "./auth/authSlice";
import { booksReducer } from "./books/booksSlice";
import { ordersReducer } from "./orders/ordersSlice";

const reducer = {
  auth: persistedAuthReducer,
  books: booksReducer,
  orders: ordersReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
