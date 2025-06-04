import { createSlice } from "@reduxjs/toolkit";
import { Roles } from "../../lib/enums/rolesEnums";
import { CartWithItems } from "./cartTypes";

const initialState: CartWithItems & { totalPrice: number } = {
  id: "",
  userId: "",
  cartItems: [],
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
    role: Roles.USER,
    image: "",
    phone: "",
    address: "",
    createdAt: "",
    updatedAt: "",
    reviews: [],
    orders: [],
  },
  createdAt: "",
  updatedAt: "",
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCart: (state, action) => {
      state.cartItems = action.payload;
    },
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.productId === action.payload.product.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalPrice -= action.payload.price * action.payload.quantity;
    },
  },
});

export const { getCart, addToCart, setTotalPrice, removeCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
