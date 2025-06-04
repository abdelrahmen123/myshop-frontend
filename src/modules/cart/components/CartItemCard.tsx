"use client";
import { Button } from "@/components/ui/button";
import { CartItemCardProps } from "../cartTypes";
import { useRemoveItem } from "../cartHooks";

function CartItemCard({ id, product, quantity }: CartItemCardProps) {
  const removeItem = useRemoveItem();

  return (
    <div className="flex gap-4 w-full p-7 bg-sky-50 text-center rounded-md shadow-2xl justify-between">
      <div className="flex flex-col gap-4 justify-between">
        <h3 className="text-start w-full text-gray-600 text-2xl font-semibold">
          {product.name}
        </h3>
        <div className="flex gap-2 text-start">
          <p className="text-2xs underline font-semibold text-gray-500">
            Price: {product.price}$
          </p>
          <p className="text-2xs underline font-semibold text-gray-500">
            Quantity: {quantity}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <Button
          onClick={() =>
            removeItem({
              id,
              price: product.price,
              quantity,
            })
          }
          className="bg-red-500 hover:border-red-500 border-2 text-white hover:bg-transparent border-transparent hover:text-red-500"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItemCard;
