import { removeCartItem } from "@/modules/cart/cartSlice";
import { toast } from "react-toastify";
import { removeItemApiCall } from "@/modules/cart/cartService";
import handleError from "@/lib/logic/handleErrorLogic";
import { RemoveItemParams } from "./cartTypes";

export const removeItemHandler = async ({
  id,
  price,
  quantity,
  dispatch,
}: RemoveItemParams) => {
  try {
    const data = await removeItemApiCall(id);

    if (data === null) {
      toast.error("Something went wrong");
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
  } catch (error) {
    handleError(error);
  }
};
