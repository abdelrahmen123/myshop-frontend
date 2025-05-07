"use client";
import { useEffect, useState } from "react";
import { Product } from "../types";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";

function BestSellers() {
  const [bestProducts, setBestProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/bestSellers`
        );
        const data = await response.json();
        setBestProducts(data.data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };

    fetchBestProducts();
  }, []);

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
