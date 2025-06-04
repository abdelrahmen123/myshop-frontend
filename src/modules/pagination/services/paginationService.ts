async function fetchProductsCountApiCall() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/count`
  );

  return res.json();
}

export default fetchProductsCountApiCall;
