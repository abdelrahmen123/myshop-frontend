import { Product } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  quantity: number;
  productId: string;
  cartId: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
}

interface Cart {
  id: string;
  userId: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  cartItems: CartItem[];
}
const initialState: Cart = {
  id: "",
  userId: "",
  totalPrice: 0,
  createdAt: "",
  updatedAt: "",
  cartItems: [],
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
