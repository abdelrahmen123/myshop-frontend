import { OrderItem } from "@/lib/types/EntitiesTypes";
import React from "react";

function OrderItemComponent({ item }: { item: OrderItem }) {
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-4">
      <div className=" flex gap-2">
        <span>X{item.quantity}</span>
        <span className="text-sm text-gray-500 font-medium">
          {item.product.name}
        </span>
      </div>
      <hr className="w-full h-1 bg-gray-900" />
      <span>{item.product.price} L.E</span>
    </div>
  );
}

export default OrderItemComponent;
