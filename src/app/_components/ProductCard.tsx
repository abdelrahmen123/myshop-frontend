"use client";
import { Product } from "../types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import { setMarkedProduct } from "@/lib/features/productSlice";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
  isBest?: boolean;
}

function ProductCard({ product, isBest }: ProductCardProps) {
  const categories = useAppSelector((state) => state.category.categories);
  const category = categories.find((c) => c.id === product.categoryId);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <article
      className={`bg-sky-100 container p-5 text-center rounded-md ${
        isBest ? "shadow-2xs" : "shadow-2xl"
      }`}
    >
      <h4 className="font-semibold text-2xl text-gray-600">{product.name}</h4>
      <h6 className="text-gray-500 text-xl font-semibold mb-4">
        {category?.name}
      </h6>
      <div className="flex justify-around items-center gap-6 text-gray-700">
        <div>
          <Image
            src={product.imageCover || "/LOGO9.png"}
            alt={product.name || "Product"}
            width={70}
            height={70}
          />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <p>{product.description}</p>
          <p>Price: {product.price}$</p>
          <p>Quantity: {product.quantity}</p>
          <p>Rating: {product.rating}</p>
        </div>
      </div>
      <Button
        onClick={() => {
          dispatch(setMarkedProduct(product));
          router.push("/products/product-info");
        }}
        className="cursor-pointer mt-5 bg-sky-500 border-2 hover:border-sky-500 hover:text-sky-500 hover:bg-transparent"
      >
        Learn More
      </Button>
    </article>
  );
}

export default ProductCard;
