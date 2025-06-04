"use client";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import SearchInput from "./SearchInput";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import Avatar from "../../../components/Header/components/Avatar";
import { useGetUserCart } from "../hooks/useGetCart";
import { useSessionGuard } from "../hooks/useSessionGuard";
import logoutHandler from "../logic/logoutLogic";
import { RouterType } from "@/lib/types/globalTypes";
import { AppDispatch } from "@/lib/utils/store";
import { useRouter } from "next/navigation";

function Menu() {
  const isAuthenticated: boolean = useAppSelector(
    (state) => state.auth.isAuthenticated
  );
  const dispatch: AppDispatch = useAppDispatch();
  const router: RouterType = useRouter();

  useSessionGuard();
  useGetUserCart();

  return (
    <main className="gap-3 flex items-center sm:gap-7 flex-1 justify-end">
      <SearchInput />
      <ul className="hidden md:flex justify-between items-center gap-4 text-white">
        {isAuthenticated && (
          <>
            <li className="hover:text-blue-100 hover:underline">
              <Link href={"/cart"}>Cart</Link>
            </li>
            <li className="hover:text-blue-100 hover:underline">
              <Link href={"/orders"}>Orders</Link>
            </li>
          </>
        )}

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
          <Avatar />
          <Button
            onClick={() => logoutHandler(dispatch, router)}
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
