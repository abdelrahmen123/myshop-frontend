"use client";
import { Menu, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import { toggleSidebar } from "@/components/Sidebar/sidebarSlice";
function SidebarHandlerButton() {
  const isOpened = useAppSelector((state) => state.sidebar.isOpened);
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(toggleSidebar())}
      className="block md:hidden w-8 h-full text-3xl text-center align-middle font-semibold text-white cursor-pointer"
    >
      {isOpened ? (
        <X className="w-6 h-6 rotate-90" />
      ) : (
        <Menu className="w-6 h-6 rotate-0" />
      )}
    </button>
  );
}

export default SidebarHandlerButton;
