"use client";
import { Order } from "@/lib/types/EntitiesTypes";
import { useState } from "react";
import { useFetchOrders } from "../hooks/useFetchOrders";
import OrderComponent from "./OrderComponent";

function OrdersPageBody() {
  const [orders, setOrders] = useState<Order[]>([]);

  useFetchOrders(setOrders);

  return (
    <main className="mx-10 my-4 flex flex-col gap-8">
      <h1 className="underline text-4xl font-bold text-gray-600">Orders: </h1>
      {orders.length === 0 ? (
        <>
          <h2 className="text-2xl text-gray-600 font-semibold">
            No orders yet
          </h2>
        </>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-start">
          {orders.map((order) => {
            if (order.status === "PENDING") {
              return (
                <OrderComponent
                  key={order.id}
                  order={order}
                  setOrders={setOrders}
                />
              );
            }
          })}
        </div>
      )}
    </main>
  );
}

export default OrdersPageBody;
