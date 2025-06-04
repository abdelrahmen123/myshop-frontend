import { AppDispatch } from "../../lib/store";
import { Cart, CartItem, Product, User } from "../../lib/types/EntitiesTypes";

export type CartWithItems = Cart & {
  cartItems: (CartItem & {
    product: Product;
  })[];
};

export type CartWithUserAndItems = {
  user: User;
  cartItems: (CartItem & {
    product: Product;
  })[];
};

export type GetCartResponse = {
  status: number;
  message: string;
  totalPrice: number;
  data: CartWithUserAndItems;
};

export type RemoveItemParams = {
  id: string;
  price: number;
  quantity: number;
  dispatch: AppDispatch;
};

export type CartItemCardProps = {
  id: string;
  product: Product;
  quantity: number;
};
