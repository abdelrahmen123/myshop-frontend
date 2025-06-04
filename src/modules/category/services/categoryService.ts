const fetchCategoriesApiCall = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category`
    );
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchCategoriesApiCall;
