import { SearchIcon } from "lucide-react";
import React from "react";

function SearchInput() {
  return (
    <form className="flex justify-center items-center gap-6 flex-1">
      <button>
        <SearchIcon className="w-6 h-6 hover:text-sky-900 font-black text-sky-50 cursor-pointer" />
      </button>
      <input
        type="search"
        placeholder="Search..."
        className="flex-1 p-2 rounded-md bg-sky-50 border-sky-900 text-sky-950 shadow-2xl"
      />
    </form>
  );
}

export default SearchInput;
