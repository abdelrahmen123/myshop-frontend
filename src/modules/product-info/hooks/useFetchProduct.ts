import { useEffect, useState } from "react";
import { fetchProductHandler } from "../logic/productInfoLogic";
import { Product } from "@/lib/types/EntitiesTypes";

export const useFetchProduct = (productId: string, refetch: boolean) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!productId) return;
    fetchProductHandler(productId, setProduct);
  }, [productId, refetch]);

  return product;
};
