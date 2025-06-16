const fetchBestProductsApiCall = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/bestSellers`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchBestProductsApiCall;
