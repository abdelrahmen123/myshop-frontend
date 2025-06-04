import { Product } from "@/app/types";
import { toast } from "react-toastify";
import addToCartApiCall from "../services/productInfoService";
import { AppDispatch } from "@/lib/utils/store";
import { addToCart } from "@/modules/cart/cartSlice";
import handleError from "@/lib/logic/handleErrorLogic";

const handleAddToCart = async (
  quantity: number,
  product: Product,
  dispatch: AppDispatch
) => {
  try {
    const data = await addToCartApiCall(quantity, product.id);

    if (data.status === 200) {
      toast.success(data.message);
      dispatch(
        addToCart({
          product,
          quantity,
        })
      );
    } else toast.error(data.message);
  } catch (error) {
    handleError(error);
  }
};

export default handleAddToCart;
