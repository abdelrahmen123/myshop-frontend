import { useEffect } from "react";
import searchProductHandler from "../logic/searchProductLogic";
import { Product } from "@/lib/types/EntitiesTypes";

export const useSearchProduct = (
  searchKeyword: string,
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
) => {
  useEffect(() => {
    searchProductHandler(searchKeyword, setProducts);
  }, [searchKeyword]);
};
