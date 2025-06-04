// useRemoveItem.ts
"use client";
import { useAppDispatch } from "@/lib/hooks/store.hooks";
import { RemoveItemParams } from "./cartTypes";
import { removeItemHandler } from "./cartLogic";

export const useRemoveItem = () => {
  const dispatch = useAppDispatch();

  return async ({
    id,
    price,
    quantity,
  }: Omit<RemoveItemParams, "dispatch">) => {
    await removeItemHandler({ id, price, quantity, dispatch });
  };
};
