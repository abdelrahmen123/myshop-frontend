import { getCart, removeCartItem } from "@/modules/cart/cartSlice";
import { toast } from "react-toastify";
import {
  createOrderApiCall,
  getCartApiCall,
  removeItemApiCall,
} from "@/modules/cart/cartService";
import handleError from "@/lib/logic/handleErrorLogic";
import { GetCartResponse, RemoveItemParams } from "./cartTypes";
import React from "react";
import { AppDispatch } from "@/lib/store";
import { RouterType } from "@/lib/types/globalTypes";

export const removeItemHandler = async ({
  id,
  price,
  quantity,
  dispatch,
  setLoading,
}: RemoveItemParams) => {
  try {
    setLoading(true);
    const data = await removeItemApiCall(id);

    if (data === null) {
      toast.error("Something went wrong");
      setLoading(false);
      return;
    }

    if (data.status === 200) {
      toast.success(data.message);
      dispatch(
        removeCartItem({
          id,
          price,
          quantity,
        })
      );
    } else toast.error(data.message);

    setLoading(false);
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
  }
};

export const getCartHandler = async (
  setData: React.Dispatch<React.SetStateAction<GetCartResponse | null>>,
  dispatch: AppDispatch,
  router: RouterType
) => {
  try {
    const data = await getCartApiCall();
    console.log(data);

    if (data.statusCode >= 400) {
      router.replace("/");
      toast.error("Please add products to cart before checkout");
      return;
    }

    setData(data);

    dispatch(getCart(data.data.cartItems));
  } catch (error) {
    handleError(error);
  }
};

export const createOrderHandler = async (
  router: RouterType,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);

    const data = await createOrderApiCall();

    if (data.statusCode >= 400 || data.status >= 400) {
      toast.error(data.message);
      setLoading(false);
      return;
    }

    toast.success(data.message);

    setLoading(false);

    router.replace("/orders");
    return data;
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
  }
};
