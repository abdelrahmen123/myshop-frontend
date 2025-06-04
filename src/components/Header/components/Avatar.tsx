import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

function Avatar() {
  return (
    <div className="w-10 h-10 rounded-full bg-sky-600 text-white border-3 border-white hover:bg-white hover:border-transparent hover:text-sky-600 flex justify-center items-center">
      <Link href={"/profile"}>
        <User />
      </Link>
    </div>
  );
}

export default Avatar;
