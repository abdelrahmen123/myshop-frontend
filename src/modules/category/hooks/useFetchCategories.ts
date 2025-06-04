import { useAppDispatch } from "@/lib/hooks/store.hooks";
import { useEffect } from "react";
import fetchCategoriesHandler from "../logic/categoryLogic";

const useFetchCategories = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchCategoriesHandler(dispatch);
  }, []);
};

export default useFetchCategories;
