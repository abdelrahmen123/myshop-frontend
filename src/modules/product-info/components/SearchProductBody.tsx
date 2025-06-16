"use client";
import ProductCard from "@/modules/product/components/ProductCard";
import { useAppSelector } from "@/lib/hooks/store.hooks";
import { useState } from "react";
import { useSearchProduct } from "../hooks/useSearchProduct";
import { Product } from "@/lib/types/EntitiesTypes";

function SearchProductBody() {
  const searchKeyword = useAppSelector(
    (state) => state.searchProduct.searchKeyword
  );
  const [products, setProducts] = useState<Product[]>([]);

  useSearchProduct(searchKeyword, setProducts);

  return (
    <main className="container flex-1">
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
