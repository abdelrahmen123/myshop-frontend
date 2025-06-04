const fetchProductsApiCall = async (page: number, category: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product?page=${page}&limit=12&category=${category}`
    );

    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchProductsApiCall;
