"use client";
import { useEffect, useMemo } from "react";
import CategoryItem from "./CategoryItem";
import { toast } from "react-toastify";
import { Category } from "../types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import { setCategories } from "@/lib/features/categorySlice";

function Categories() {
  const categories: Category[] = useAppSelector(
    (state) => state.category.categories
  );
  const markedCategory = useAppSelector(
    (state) => state.category.markedCategory
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category`
        );
        const data = await response.json();
        dispatch(setCategories(data.data));
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };

    fetchCategories();
  }, []);

  const memoizedCategories = useMemo(() => categories, [categories]);

  return (
    <ul className="flex justify-center mt-6 items-center gap-4 flex-wrap">
      <li>
        <CategoryItem categoryname="All" isActive={"All" === markedCategory} />
      </li>
      {memoizedCategories.map((category) => (
        <li key={category.id}>
          <CategoryItem
            categoryname={category.name}
            isActive={category.name === markedCategory}
          />
        </li>
      ))}
    </ul>
  );
}

export default Categories;
