"use client";
import { useAppSelector } from "@/lib/hooks/store.hooks";
import ProductCard from "./ProductCard";
import { useMemo } from "react";
import { Product } from "@/lib/types/EntitiesTypes";
import useFetchProducts from "../hooks/useFetchProducts";

function Section() {
  const products: Product[] = useAppSelector(
    (state) => state.products.products
  );

  useFetchProducts();

  const memoizedProducts = useMemo(() => products, [products]);

  return (
    <section className="my-10 mx-10 flex flex-col gap-4">
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-15">
        {memoizedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
      <hr className="mt-7" />
    </section>
  );
}

export default Section;
