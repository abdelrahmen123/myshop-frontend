import { Product } from "@/lib/types/EntitiesTypes";
import { createContext } from "react";

type ProductContextType = {
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
};

export const ProductContext = createContext<ProductContextType | null>(null);
