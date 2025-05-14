"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import { useEffect, useMemo } from "react";
import { setProducts } from "@/lib/features/productSlice";
import { toast } from "react-toastify";

function Section() {
  const products: Product[] = useAppSelector(
    (state) => state.products.products
  );
  const page = useAppSelector((state) => state.products.pageNumber);
  const markedCategory = useAppSelector(
    (state) => state.category.markedCategory
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const category = markedCategory === "All" ? "" : markedCategory;
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product?page=${page}&limit=12&category=${category}`
        );

        const data = await response.json();

        dispatch(setProducts(data.data));
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };

    fetchProducts();
  }, [page, markedCategory]);

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
