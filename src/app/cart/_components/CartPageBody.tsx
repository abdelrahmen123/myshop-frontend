"use client";

import { useAppSelector } from "@/lib/hooks/store.hooks";
import CartItemCard from "./CartItemCard";
import { Button } from "@/components/ui/button";

function CartPageBody() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice: number = useAppSelector((state) => state.cart.totalPrice);
  const data = useAppSelector((state) => state.user.data);

  return (
    <main className=" p-6 w-[90%] min-h-92 rounded-md shadow-2xl m-4 bg-sky-100">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-gray-700 font-bold">{data.name}'s Cart</h1>
        <h2 className="text-2xl text-gray-600 font-semibold underline my-4">
          Total Price: {totalPrice}$
        </h2>
      </div>
      <div className="flex justify-center items-center my-10 w-full">
        <Button className="bg-sky-500 text-xl p-3 hover:border-sky-500 border-2 text-white hover:bg-transparent border-transparent hover:text-sky-500 w-full font-semibold">
          Create Order
        </Button>
      </div>
      <h4 className="text-2xl text-gray-600 font-semibold mb-4">Items</h4>
      <section className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <CartItemCard
            key={item.id}
            id={item.id}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </section>
    </main>
  );
}

export default CartPageBody;
