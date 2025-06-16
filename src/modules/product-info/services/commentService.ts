import { getTokenFromLocalStorage } from "@/modules/menu/services/getTokenFromLocalStorage";

export const createCommentApiCall = async (text: string, productId: string) => {
  try {
    const token = getTokenFromLocalStorage();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/${productId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          text,
        }),
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
