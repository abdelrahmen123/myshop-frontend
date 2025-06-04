import { AppDispatch } from "@/lib/store";
import { Product } from "@/lib/types/EntitiesTypes";
import { RouterType } from "@/lib/types/globalTypes";
import { setMarkedProduct } from "../productSlice";

const handleLearnMore = (
  dispatch: AppDispatch,
  product: Product,
  router: RouterType
) => {
  dispatch(setMarkedProduct(product));
  router.push("/products/product-info");
};

export default handleLearnMore;
