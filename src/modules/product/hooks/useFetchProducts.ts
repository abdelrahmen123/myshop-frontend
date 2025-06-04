import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import { useEffect } from "react";
import fetchProductsHandler from "../logic/productLogic";

const useFetchProducts = () => {
  const page = useAppSelector((state) => state.products.pageNumber);
  const markedCategory = useAppSelector(
    (state) => state.category.markedCategory
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchProductsHandler(page, markedCategory, dispatch);
  }, [page, markedCategory]);
};

export default useFetchProducts;
