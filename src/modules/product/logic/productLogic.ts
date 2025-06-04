import { AppDispatch } from "@/lib/store";
import fetchProductsApiCall from "../services/productService";
import { setProducts } from "../productSlice";
import handleError from "@/lib/logic/handleErrorLogic";

const fetchProductsHandler = async (
  page: number,
  markedCategory: string,
  dispatch: AppDispatch
) => {
  try {
    const category = markedCategory === "All" ? "" : markedCategory;

    const data = await fetchProductsApiCall(page, category);

    dispatch(setProducts(data.data));
  } catch (error) {
    handleError(error);
  }
};

export default fetchProductsHandler;
