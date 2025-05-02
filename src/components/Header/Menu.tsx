"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import SearchInput from "./SearchInput";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import { logout } from "@/lib/features/authSlice";

function Menu() {
  const router = useRouter();
  const isAuthenticated: boolean = useAppSelector(
    (state) => state.auth.isAuthenticated
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiresAt = parseInt(localStorage.getItem("expiresAt") as string);

    if (!token || isNaN(expiresAt) || Date.now() > expiresAt) {
      toast.error("Your session has expired");
      router.refresh();
      router.push("/");
    }
  }, [router]);

  return (
    <main className="flex items-center gap-7 flex-1 justify-start">
      <SearchInput />
      <ul className="flex justify-between items-center gap-4 text-white">
        <li className="hover:text-blue-100 hover:underline">
          <Link href={"/cart"}>Cart</Link>
        </li>
        <li className="hover:text-blue-100 hover:underline">
          <Link href={"/orders"}>Orders</Link>
        </li>
        <li className="hover:text-blue-100 hover:underline">
          <Link href={"/about"}>About Us</Link>
        </li>
        <li className="hover:text-blue-100 hover:underline">
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
      {!isAuthenticated ? (
        <div className="flex justify-between items-center gap-5">
          <Link href={"/auth/login"}>
            <Button className="hover:bg-transparent cursor-pointer shadow-2xl hover:border-yellow-500 border-3 hover:text-yellow-500 font-semibold border-transparent text-sky-100 bg-yellow-500 ">
              Login
            </Button>
          </Link>

          <Link href={"/auth/signin"}>
            <Button className="hover:bg-transparent cursor-pointer shadow-2xl hover:border-yellow-500 border-3 hover:text-yellow-500 font-semibold border-transparent text-sky-100 bg-yellow-500 ">
              Signin
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex justify-between items-center gap-5">
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("expiresAt");
              dispatch(logout());
              router.push("/");
            }}
            className="hover:bg-transparent cursor-pointer shadow-2xl hover:border-red-500 border-3 hover:text-red-500 font-semibold border-transparent text-sky-100 bg-red-500 "
          >
            Logout
          </Button>
        </div>
      )}
    </main>
  );
}

export default Menu;
