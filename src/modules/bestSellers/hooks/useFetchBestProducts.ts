import { Product } from "@/lib/types/EntitiesTypes";
import { useEffect } from "react";
import fetchBestProductsHandler from "../logic/bestSellersLogic";

const useFetchBestProducts = (
  setBestProducts: React.Dispatch<React.SetStateAction<Product[]>>
) => {
  useEffect(() => {
    fetchBestProductsHandler(setBestProducts);
  }, []);
};

export default useFetchBestProducts;
