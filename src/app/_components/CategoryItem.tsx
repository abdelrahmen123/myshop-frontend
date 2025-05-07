import { useAppDispatch } from "@/lib/hooks/store.hooks";
import { setMarkedCategory } from "@/lib/features/categorySlice";

function CategoryItem({
  categoryname,
  isActive,
}: {
  categoryname: string;
  isActive: boolean;
}) {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => {
        dispatch(setMarkedCategory(categoryname));
      }}
      className={`w-fit h-fit p-2 rounded-3xl text-white hover:bg-transparent hover:border-sky-500 border-3 hover:text-sky-500 cursor-pointer bg-sky-500 ${
        isActive && "bg-sky-600"
      }`}
    >
      {categoryname}
    </button>
  );
}

export default CategoryItem;
