import handleError from "@/lib/logic/handleErrorLogic";
import { toast } from "react-toastify";
import fetchProductsByKeyword from "../services/searchProductService";
import { Product } from "@/lib/types/EntitiesTypes";

const searchProductHandler = async (
  searchKeyword: string,
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
) => {
  if (!searchKeyword) {
    toast.error("Please enter a search keyword");
    return;
  }
  try {
    const data = await fetchProductsByKeyword(searchKeyword);
    if (data.data.length === 0) toast.error("No products found");
    setProducts(data.data);
  } catch (error) {
    handleError(error);
  }
};

export default searchProductHandler;
