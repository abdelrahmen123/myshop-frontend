import handleError from "@/lib/logic/handleErrorLogic";
import { Order } from "@/lib/types/EntitiesTypes";
import { getTokenFromLocalStorage } from "@/modules/menu/services/getTokenFromLocalStorage";
import { fetchOrdersApiCall } from "../services/fetchOrdersService";
import { toast } from "react-toastify";
import { OrderStatus } from "@/lib/enums/orderEnums";

export const fetchOrdersHandler = async (
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>
) => {
  try {
    const token = getTokenFromLocalStorage() as string;

    const data = await fetchOrdersApiCall(token);

    if (data.status >= 400) {
      toast.error(data.message);
      return;
    }

    const pendingOrders = data.data.filter(
      (order: Order) => order.status === OrderStatus.PENDING
    );

    if (pendingOrders.length > 0) toast.success(data.message);

    setOrders(pendingOrders);
  } catch (error) {
    handleError(error);
  }
};
