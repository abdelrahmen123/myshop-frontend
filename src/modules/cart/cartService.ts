import { getTokenFromLocalStorage } from "../menu/services/getTokenFromLocalStorage";

export const removeItemApiCall = async (id: string) => {
  try {
    const token = getTokenFromLocalStorage();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          type: "remove",
        }),
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCartApiCall = async () => {
  try {
    const token = getTokenFromLocalStorage();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/user-cart`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createOrderApiCall = async () => {
  try {
    const token = getTokenFromLocalStorage();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
