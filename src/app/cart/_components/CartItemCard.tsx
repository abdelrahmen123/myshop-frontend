"use client";
import { Product } from "@/app/types";
import { Button } from "@/components/ui/button";
import { removeCartItem } from "@/lib/features/cartSlice";
import { useAppDispatch } from "@/lib/hooks/store.hooks";
import { toast } from "react-toastify";

function CartItemCard({
  id,
  product,
  quantity,
}: {
  id: string;
  product: Product;
  quantity: number;
}) {
  const dispatch = useAppDispatch();

  const removeItem = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            type: "remove",
          }),
        }
      );
      const data = await response.json();
      if (data.status === 200) {
        toast.success(data.message);
        dispatch(
          removeCartItem({
            id: id,
            price: product.price,
            quantity: quantity,
          })
        );
      } else toast.error(data.message);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

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
          onClick={removeItem}
          className="bg-red-500 hover:border-red-500 border-2 text-white hover:bg-transparent border-transparent hover:text-red-500"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItemCard;
