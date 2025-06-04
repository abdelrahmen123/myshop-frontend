"use client";
import { useMemo } from "react";
import CategoryItem from "./CategoryItem";
import { useAppSelector } from "@/lib/hooks/store.hooks";
import { Category } from "@/lib/types/EntitiesTypes";
import useFetchCategories from "../hooks/useFetchCategories";

function Categories() {
  const categories: Category[] = useAppSelector(
    (state) => state.category.categories
  );
  const markedCategory = useAppSelector(
    (state) => state.category.markedCategory
  );

  useFetchCategories();

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
