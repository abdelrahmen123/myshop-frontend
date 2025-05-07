"use client";
import { useAppDispatch } from "@/lib/hooks/store.hooks";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { setSearchProductKeyword } from "@/lib/features/searchProductSlice";
import { useRouter } from "next/navigation";

function SearchInput() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchProductKeyword(searchKeyword));
    router.replace("/products/search");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex justify-end sm:justify-center items-center gap-6 flex-1"
    >
      <button>
        <SearchIcon className="w-6 h-6 hover:text-sky-900 font-black text-sky-50 cursor-pointer" />
      </button>
      <input
        type="search"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        placeholder="Search..."
        className="hidden sm:block w-[80%] md:w-[60%] p-2 rounded-md bg-sky-50 border-sky-900 text-sky-950 shadow-2xl"
      />
    </form>
  );
}

export default SearchInput;
