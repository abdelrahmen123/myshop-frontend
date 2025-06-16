import handleError from "@/lib/logic/handleErrorLogic";

const addToCartApiCall = async (quantity: number, productId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      }
    );
    return response.json();
  } catch (error) {
    handleError(error);
  }
};

export default addToCartApiCall;

export const getProductApiCall = async (productId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/${productId}`
    );
    return response.json();
  } catch (error) {
    handleError(error);
    return null;
  }
};
