import ProductPageComponent from "@/modules/product-info/components/ProductPageComponent";
import { getProductById } from "@/modules/product-info/logic/productInfoLogic";

async function ProductPage(props: { params: Promise<{ productId: string }> }) {
  const { productId } = await props.params;
  const product = await getProductById(productId);

  if (!product) {
    return (
      <h2 className="text-3xl flex-1 font-bold text-gray-600 text-center">
        Product not found
      </h2>
    );
  }

  return <ProductPageComponent initialProduct={product} />;
}

export default ProductPage;
