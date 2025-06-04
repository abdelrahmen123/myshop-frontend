import handleError from "@/lib/logic/handleErrorLogic";
import fetchBestProductsApiCall from "../services/bestSellersService";
import { Product } from "@/lib/types/EntitiesTypes";

const fetchBestProductsHandler = async (
  setBestProducts: React.Dispatch<React.SetStateAction<Product[]>>
) => {
  try {
    const data = await fetchBestProductsApiCall();
    setBestProducts(data.data);
  } catch (error) {
    handleError(error);
  }
};

export default fetchBestProductsHandler;
