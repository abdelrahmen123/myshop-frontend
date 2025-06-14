"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import handleAddToCart from "../logic/productInfoLogic";

function ProductPageBody() {
  const product = useAppSelector((state) => state.products.markedProduct);
  const categories = useAppSelector((state) => state.category.categories);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  const category = categories.find((c) => c.id === product.categoryId);

  return (
    <article
      className={`bg-sky-100 container p-5 text-center rounded-md shadow-2xl w-[97%]`}
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
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <p>{product.description}</p>
          <p>Price: {product.price}$</p>
          <p>Quantity: {product.quantity}</p>
          <p>Rating: {product.rating}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            if (quantity < product.quantity) {
              setQuantity(quantity + 1);
            }
          }}
          className="text-2xl text-white border-2 border-transparent bg-sky-500 hover:text-sky-500 hover:bg-transparent hover:border-sky-500  font-semibold rounded-md mx-4 h-10 w-10"
        >
          +
        </button>
        <button
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
          className="text-2xl text-white border-2 border-transparent bg-sky-500 hover:text-sky-500 hover:bg-transparent hover:border-sky-500  font-semibold rounded-md mx-4 h-10 w-10"
        >
          -
        </button>
      </div>
      <Button
        onClick={() => handleAddToCart(quantity, product, dispatch)}
        className="text-xl font-semibold cursor-pointer mt-5 w-full bg-sky-500 border-2 hover:border-sky-500 hover:text-sky-500 hover:bg-transparent"
      >
        Add To Cart {quantity}
      </Button>
    </article>
  );
}

export default ProductPageBody;
