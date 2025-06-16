"use client";
import { Order } from "@/lib/types/EntitiesTypes";
import OrderItemComponent from "./OrderItemComponent";
import { formatDate } from "@/lib/logic/formatDate";
import { Button } from "@/components/ui/button";
import { cancelOrderHandler } from "../logic/cancelOrderLogic";

function OrderComponent({
  order,
  setOrders,
}: {
  order: Order;
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}) {
  return (
    <main className="bg-sky-100 shadow-2xl rounded-2xl p-4 flex flex-col gap-4 w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-gray-500  font-semibold">
          {formatDate(order.createdAt)}
        </h1>
        <h1 className="text-gray-500  font-semibold">
          total: {order.totalAmount} L.E
        </h1>
      </div>

      <div className="flex flex-col justify-center md:justify-start md:flex-row gap-4 items-center">
        <div className="flex-1 flex flex-wrap gap-4">
          {order.items.map((item) => (
            <OrderItemComponent key={item.id} item={item} />
          ))}
        </div>
        <Button
          onClick={() => {
            cancelOrderHandler(order.id, setOrders);
          }}
          className="bg-red-500 hover:border-red-500 cursor-pointer border-2 text-white hover:bg-transparent border-transparent hover:text-red-500"
        >
          Cancel Order
        </Button>
      </div>
    </main>
  );
}

export default OrderComponent;
