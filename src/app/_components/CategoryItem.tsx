import React from "react";

function CategoryItem({ categoryname }: { categoryname: string }) {
  return (
    <div className="w-fit h-fit p-2 rounded-3xl bg-sky-500 text-white hover:bg-transparent hover:border-sky-500 border-3 hover:text-sky-500 cursor-pointer">
      <button className="cursor-pointer">{categoryname}</button>
    </div>
  );
}

export default CategoryItem;
