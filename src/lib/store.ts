// store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import sidebarReducer from "./features/sidebarSlice";
import categoryReducer from "./features/categorySlice";
import productReducer from "./features/productSlice";
import searchProductReducer from "./features/searchProductSlice";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    category: categoryReducer,
    products: productReducer,
    searchProduct: searchProductReducer,
    cart: cartReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
