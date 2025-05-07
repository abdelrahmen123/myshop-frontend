// store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import sidebarReducer from "./features/sidebarSlice";
import categoryReducer from "./features/categorySlice";
import productReducer from "./features/productSlice";
import searchProductReducer from "./features/searchProductSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    category: categoryReducer,
    products: productReducer,
    searchProduct: searchProductReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
