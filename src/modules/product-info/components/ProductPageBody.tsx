"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import handleAddToCart from "../logic/productInfoLogic";
import Link from "next/link";
import Loader from "@/components/loader";
import { Loader2 } from "lucide-react";
import { ProductContext } from "../contexts/productContext";

function ProductPageBody() {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState<boolean>(false);

  const context = useContext(ProductContext);

  if (!context) return null;
  const { product } = context;

  return (
    <article
      className={`bg-sky-100 container p-5 text-center rounded-md shadow-2xl w-[97%]`}
    >
      {product === null ? (
        <Loader />
      ) : (
        <>
          <h4 className="font-semibold text-2xl text-gray-600">
            {product.name}
          </h4>
          <h6 className="text-gray-500 text-xl font-semibold mb-4">
            {product?.category.name}
          </h6>
          <div className="flex justify-around items-center gap-6 text-gray-700">
            <div>
              <Image
                src={"/LOGO9.png"}
                alt={product?.name || "Product"}
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <p>{product?.description}</p>
              <p>Price: {product?.price}$</p>
              <p>Quantity: {product?.quantity}</p>
              <p>Rating: {product?.rating}</p>
            </div>
          </div>

          {isAuthenticated ? (
            <>
              <div>
                <button
                  onClick={() => {
                    if (quantity < product?.quantity) {
                      setQuantity(quantity + 1);
                    }
                  }}
                  className="text-2xl cursor-pointer text-white border-2 border-transparent bg-sky-500 hover:text-sky-500 hover:bg-transparent hover:border-sky-500  font-semibold rounded-md mx-4 h-10 w-10"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  className="text-2xl cursor-pointer text-white border-2 border-transparent bg-sky-500 hover:text-sky-500 hover:bg-transparent hover:border-sky-500  font-semibold rounded-md mx-4 h-10 w-10"
                >
                  -
                </button>
              </div>
              <Button
                onClick={() =>
                  handleAddToCart(quantity, product, dispatch, setLoading)
                }
                className={`${
                  loading
                    ? "cursor-progress flex justify-center items-center"
                    : "cursor-pointer"
                } text-xl font-semibold mt-5 w-full bg-sky-500 border-2 hover:border-sky-500 hover:text-sky-500 hover:bg-transparent`}
              >
                {loading ? (
                  <Loader2 className="animate-spin text-white font-semibold" />
                ) : (
                  `Add To Cart ${quantity}`
                )}
              </Button>
            </>
          ) : (
            <h4 className="text-2xl text-gray-600 font-semibold mt-3">
              Please Log In To Add To Cart{" "}
              <Link
                href="/auth/login"
                className="underline text-sky-500 text-sm"
              >
                login
              </Link>
            </h4>
          )}
        </>
      )}
    </article>
  );
}

export default ProductPageBody;
