import handleError from "@/lib/logic/handleErrorLogic";
import { getTokenFromLocalStorage } from "@/modules/menu/services/getTokenFromLocalStorage";
import { cancelOrderApiCall } from "../services/cancelOrderService";
import { toast } from "react-toastify";
import { Order } from "@/lib/types/EntitiesTypes";

export const cancelOrderHandler = async (
  orderId: string,
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>
) => {
  try {
    const token: string = getTokenFromLocalStorage() as string;

    const data = await cancelOrderApiCall(token, orderId);

    if (data.status >= 400 || data.statusCode >= 400) {
      toast.error(data.message);
      return;
    }

    toast.success(data.message);

    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );

    return data;
  } catch (error) {
    handleError(error);
  }
};
