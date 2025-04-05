import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./token/tokenSlice";
export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
