"use client";
import { useAppDispatch } from "@/lib/hooks/store.hooks";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitSearchKeywordHandler } from "../logic/searchLogic";

function SearchInput() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
        submitSearchKeywordHandler(e, dispatch, searchKeyword, router)
      }
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
        className="block w-[80%] md:w-[60%] p-2 rounded-md bg-sky-50 border-sky-900 text-sky-950 shadow-2xl"
      />
    </form>
  );
}

export default SearchInput;
