import React from "react";
import ProductPageBody from "./_components/ProductPageBody";
import CommentsBox from "./_components/CommentsBox";

function ProductPage() {
  return (
    <main className="container flex flex-col items-center gap-6 justify-center  min-w-screen min-h-92">
      <ProductPageBody />
      <CommentsBox />
    </main>
  );
}

export default ProductPage;
