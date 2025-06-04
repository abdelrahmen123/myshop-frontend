import { AppDispatch } from "@/lib/store";
import { setCategories } from "../categorySlice";
import fetchCategoriesApiCall from "../services/categoryService";
import handleError from "@/lib/logic/handleErrorLogic";

const fetchCategoriesHandler = async (dispatch: AppDispatch) => {
  try {
    const data = await fetchCategoriesApiCall();
    dispatch(setCategories(data.data));
  } catch (error) {
    handleError(error);
  }
};

export default fetchCategoriesHandler;
