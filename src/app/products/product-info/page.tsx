import React from "react";
import ProductPageBody from "../../../modules/product-info/components/ProductPageBody";
import CommentsBox from "../../../modules/product-info/components/CommentsBox";

function ProductPage() {
  return (
    <main className="container flex flex-col items-center gap-6 justify-center  min-w-screen min-h-92">
      <ProductPageBody />
      <CommentsBox />
    </main>
  );
}

export default ProductPage;
