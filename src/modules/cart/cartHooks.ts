// useRemoveItem.ts
"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import { GetCartResponse, RemoveItemParams } from "./cartTypes";
import { getCartHandler, removeItemHandler } from "./cartLogic";
import { useEffect } from "react";
import { AppDispatch } from "@/lib/store";
import { useRouter } from "next/navigation";

export const useRemoveItem = () => {
  const dispatch = useAppDispatch();

  return async ({
    id,
    price,
    quantity,
    setLoading,
  }: Omit<RemoveItemParams, "dispatch">) => {
    await removeItemHandler({ id, price, quantity, dispatch, setLoading });
  };
};

export const useFetchCart = (
  setData: React.Dispatch<React.SetStateAction<GetCartResponse | null>>
) => {
  const dispatch: AppDispatch = useAppDispatch();
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  useEffect(() => {
    getCartHandler(setData, dispatch, router);
  }, [cartItems]);
};
