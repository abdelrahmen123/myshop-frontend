const fetchProductsByKeyword = async (searchKeyword: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/search?keyword=${searchKeyword}`
    );
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchProductsByKeyword;
