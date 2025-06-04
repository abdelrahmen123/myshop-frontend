// store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/authSlice";
import sidebarReducer from "../components/Sidebar/sidebarSlice";
import categoryReducer from "../modules/category/categorySlice";
import productReducer from "../modules/product/productSlice";
import searchProductReducer from "../modules/product-info/searchProductSlice";
import cartReducer from "../modules/cart/cartSlice";
import userReducer from "../modules/menu/userSlice";

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
