import { setSearchProductKeyword } from "@/modules/product-info/searchProductSlice";
import { RouterType } from "@/lib/types/globalTypes";
import { AppDispatch } from "@/lib/utils/store";

export const submitSearchKeywordHandler = (
  e: React.FormEvent<HTMLFormElement>,
  dispatch: AppDispatch,
  searchKeyword: string,
  router: RouterType
) => {
  e.preventDefault();
  dispatch(setSearchProductKeyword(searchKeyword));
  router.replace("/products/search");
};
