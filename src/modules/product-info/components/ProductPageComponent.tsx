"use client";
import { useEffect, useState } from "react";
import { ProductContext } from "../contexts/productContext";
import CommentsBox from "./CommentsBox";
import ProductPageBody from "./ProductPageBody";
import { Product } from "@/lib/types/EntitiesTypes";

function ProductPageComponent({ initialProduct }: { initialProduct: Product }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    setProduct(initialProduct);
  }, [initialProduct]);

  if (!product) return null;

  return (
    <main className="container flex-1 flex flex-col items-center gap-6 justify-center  min-w-screen min-h-92">
      <ProductContext.Provider value={{ product, setProduct }}>
        <ProductPageBody />
        <CommentsBox />
      </ProductContext.Provider>
    </main>
  );
}

export default ProductPageComponent;
