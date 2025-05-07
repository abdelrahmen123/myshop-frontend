"use client";
import { useAppSelector } from "@/lib/hooks/store.hooks";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function ProductPageBody() {
  const product = useAppSelector((state) => state.products.markedProduct);
  const categories = useAppSelector((state) => state.category.categories);
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
      <Button className="text-xl font-semibold cursor-pointer mt-5 w-full bg-sky-500 border-2 hover:border-sky-500 hover:text-sky-500 hover:bg-transparent">
        Add To Cart
      </Button>
    </article>
  );
}

export default ProductPageBody;
