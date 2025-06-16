import { Order } from "@/lib/types/EntitiesTypes";
import { useEffect } from "react";
import { fetchOrdersHandler } from "../logic/fetchOrdersLogic";

export const useFetchOrders = (
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>
) => {
  useEffect(() => {
    fetchOrdersHandler(setOrders);
  }, []);
};
