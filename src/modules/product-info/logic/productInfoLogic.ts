import { toast } from "react-toastify";
import addToCartApiCall, {
  getProductApiCall,
} from "../services/productInfoService";
import { addToCart } from "@/modules/cart/cartSlice";
import handleError from "@/lib/logic/handleErrorLogic";
import { AppDispatch } from "@/lib/store";
import { Product } from "@/lib/types/EntitiesTypes";

const handleAddToCart = async (
  quantity: number,
  product: Product,
  dispatch: AppDispatch,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);

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

    setLoading(false);
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
  }
};

export default handleAddToCart;

export const fetchProductHandler = async (
  productId: string,
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>
) => {
  try {
    const data = await getProductApiCall(productId);
    if (data.status >= 400 || data.statusCode >= 400) {
      toast.error(data.message);
      return;
    }

    toast.success(data.message);

    setProduct(data.data);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getProductById = async (productId: string) => {
  const data = await getProductApiCall(productId);
  return data.data ?? null;
};
