export const removeItemApiCall = async (id: string) => {
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

    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
