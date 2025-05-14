"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import SearchInput from "./SearchInput";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import { login, logout } from "@/lib/features/authSlice";
import Avatar from "./Avatar";
import { getCart, setTotalPrice } from "@/lib/features/cartSlice";
import { setUser } from "@/lib/features/userSlice";

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
    } else {
      dispatch(login());
    }
  }, [router]);

  useEffect(() => {
    const initializeCart = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/user-cart`,
            {
              method: "GET", // أو POST أو أي طريقة HTTP أخرى حسب الحاجة
              headers: {
                Authorization: `Bearer ${token}`, // إرسال التوكن في رأس Authorization
                "Content-Type": "application/json", // إضافة رأس نوع المحتوى إذا كان مطلوبًا
              },
            }
          );

          const data = await response.json();
          console.log(data);
          console.log("User ==> ", data.data.user);
          dispatch(setUser(data.data.user));
          dispatch(getCart(data.data.cartItems));
          dispatch(setTotalPrice(data.totalPrice));
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };

    if (isAuthenticated) {
      initializeCart();
    }
  }, [isAuthenticated]);

  return (
    <main className="gap-3 flex items-center sm:gap-7 flex-1 justify-end">
      <SearchInput />
      <ul className="hidden md:flex justify-between items-center gap-4 text-white">
        {isAuthenticated && (
          <li className="hover:text-blue-100 hover:underline">
            <Link href={"/cart"}>Cart</Link>
          </li>
        )}
        {isAuthenticated && (
          <li className="hover:text-blue-100 hover:underline">
            <Link href={"/orders"}>Orders</Link>
          </li>
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
