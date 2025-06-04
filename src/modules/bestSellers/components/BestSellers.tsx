"use client";
import { useState } from "react";
import ProductCard from "../../product/components/ProductCard";
import useFetchBestProducts from "../hooks/useFetchBestProducts";
import { Product } from "@/lib/types/EntitiesTypes";

function BestSellers() {
  const [bestProducts, setBestProducts] = useState<Product[]>([]);

  useFetchBestProducts(setBestProducts);

  return (
    <section className="my-10 mx-10 flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-sky-800 text-center">
        Best Sellers
      </h2>
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-15">
        {bestProducts.map((product) => (
          <ProductCard isBest={true} key={product.id} product={product} />
        ))}
      </main>
      <hr className="mt-7" />
    </section>
  );
}

export default BestSellers;
