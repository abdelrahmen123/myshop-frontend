"use client";

import ProductCard from "@/app/_components/ProductCard";
import { Product } from "@/app/types";
import { useAppSelector } from "@/lib/hooks/store.hooks";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function SearchProductBody() {
  const searchKeyword = useAppSelector(
    (state) => state.searchProduct.searchKeyword
  );
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductsByKeyword = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/search?keyword=${searchKeyword}`
        );
        const data = await response.json();
        if (data.data.length === 0) toast.error("No products found");
        setProducts(data.data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };

    if (!searchKeyword) {
      toast.error("Please enter a search keyword");
    } else {
      fetchProductsByKeyword();
    }
  }, [searchKeyword]);

  return (
    <main className="container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-15">
        {products.length < 1 ? (
          <h2 className="text-3xl font-bold text-sky-800 text-center mb-88">
            No products found
          </h2>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </main>
  );
}

export default SearchProductBody;
