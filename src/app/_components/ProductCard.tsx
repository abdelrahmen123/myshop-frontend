import React from "react";
import { Product } from "../types";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-sky-100 container p-5 text-center rounded-md shadow-2xs">
      <h4 className="font-semibold text-2xl text-gray-600">{product.title}</h4>
      <h6 className="text-gray-500 text-xl font-semibold mb-4">
        {product.category}
      </h6>
      <div className="flex justify-around items-center flex-col gap-6 text-gray-700">
        <div>
          <Image
            src={product.imageCover}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <p>{product.description}</p>
          <p>Price: {product.price}$</p>
          <p>Quantity: {product.quantity}</p>
          <p>Rating: {product.rating.rate}</p>
        </div>
      </div>
      <Button className="mt-5 bg-sky-500 border-2 hover:border-sky-500 hover:text-sky-500 hover:bg-transparent">
        Add To Cart
      </Button>
    </article>
  );
}

export default ProductCard;
