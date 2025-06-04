"use client";
import { closeSidebar } from "@/components/Sidebar/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import menuItems from "./logic/items";

function Sidebar() {
  const isOpened = useAppSelector((state) => state.sidebar.isOpened);
  const dispatch = useAppDispatch();

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
            <Link onClick={() => dispatch(closeSidebar())} href={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}

export default Sidebar;
