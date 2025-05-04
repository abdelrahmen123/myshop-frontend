// store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import sidebarReducer from "./features/sidebarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
