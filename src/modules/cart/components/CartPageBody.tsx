"use client";
import { useState } from "react";
import { GetCartResponse } from "../cartTypes";
import CartItemCard from "./CartItemCard";
import { Button } from "@/components/ui/button";
import { useFetchCart } from "../cartHooks";
import { createOrderHandler } from "../cartLogic";
import { RouterType } from "@/lib/types/globalTypes";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Loader from "@/components/loader";

function CartPageBody() {
  const [data, setData] = useState<GetCartResponse | null>(null);
  const router: RouterType = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useFetchCart(setData);

  return (
    <main className=" p-6 w-[90%] min-h-92 rounded-md shadow-2xl m-4 bg-sky-100">
      {data === null ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl text-gray-700 font-bold">
              {data?.data.user.name || "unknown"}&apos;s Cart
            </h1>
            <h2 className="text-2xl text-gray-600 font-semibold underline my-4">
              Total Price: {data?.totalPrice || 0}$
            </h2>
          </div>
          <div className="flex justify-center items-center my-10 w-full">
            <Button
              onClick={() => {
                createOrderHandler(router, setLoading);
              }}
              className={`${
                loading
                  ? "cursor-progress flex justify-center items-center"
                  : "cursor-pointer"
              } bg-sky-500 text-xl p-3 hover:border-sky-500 border-2 text-white hover:bg-transparent border-transparent hover:text-sky-500 w-full font-semibold`}
            >
              {loading ? (
                <Loader2 className="animate-spin text-white font-semibold" />
              ) : (
                "Create Order"
              )}
            </Button>
          </div>
          <h4 className="text-2xl text-gray-600 font-semibold mb-4">Items</h4>
          <section className="flex flex-col gap-4">
            {data?.data.cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                id={item.id}
                product={item.product}
                quantity={item.quantity}
              />
            ))}
          </section>
        </>
      )}
    </main>
  );
}

export default CartPageBody;
