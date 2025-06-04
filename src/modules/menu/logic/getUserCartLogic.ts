import handleError from "@/lib/logic/handleErrorLogic";
import getUserCartApiCall from "../services/getUserCartService";
import { getTokenFromLocalStorage } from "../services/getTokenFromLocalStorage";
import { AppDispatch } from "@/lib/utils/store";
import { getCart, setTotalPrice } from "@/modules/cart/cartSlice";
import { setUser } from "../userSlice";

const getUserCartHandler = async (dispatch: AppDispatch) => {
  try {
    const token = getTokenFromLocalStorage();

    if (token) {
      const data = await getUserCartApiCall(token);

      dispatch(setUser(data.data.user));
      dispatch(getCart(data.data.cartItems));
      dispatch(setTotalPrice(data.totalPrice));
    }
  } catch (error) {
    handleError(error);
  }
};

export default getUserCartHandler;
