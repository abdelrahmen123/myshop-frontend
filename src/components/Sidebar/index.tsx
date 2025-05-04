"use client";
import { useAppSelector } from "@/lib/hooks/store.hooks";
import { motion } from "framer-motion";
import Link from "next/link";

type MenuItem = {
  id: number;
  name: string;
  path: string;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Cart",
    path: "/cart",
  },
  {
    id: 3,
    name: "Orders",
    path: "/orders",
  },
  {
    id: 4,
    name: "About Us",
    path: "/about",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contact",
  },
];

function Sidebar() {
  const isOpened = useAppSelector((state) => state.sidebar.isOpened);

  return (
    <motion.aside
      initial={{ height: 0, opacity: 0 }}
      animate={
        isOpened ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
      }
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden bg-sky-400 text-white w-screen shadow-2xl shadow-gray-400 px-6 py-3 mb-10"
    >
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="hover:text-blue-100 hover:underline">
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}

export default Sidebar;

//       className={` bg-sky-400 text-white w-screen shadow-2xl shadow-gray-400 px-6 py-3 mb-10 overflow-hidden transition-all duration-300 ease-in-out
//    ${isOpened ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
