"use client";
import { Button } from "@/components/ui/button";
import { User } from "@/lib/types/EntitiesTypes";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteProfileHandler } from "../logic/deleteProfileLogic";
import { AppDispatch } from "@/lib/store";
import { useAppDispatch } from "@/lib/hooks/store.hooks";

function ProfileInfo({
  user,
  setEditMode,
}: {
  user: User;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className=" rounded-4xl flex flex-col mx-4 justify-between items-center p-4">
      <div className="flex flex-col gap-4 p-6">
        <h3 className="md:text-xl lg:text-2xl text-gray-400">
          <span className="md:text-2xl lg:text-3xl font-semibold text-gray-500">
            Name:{" "}
          </span>
          {user.name}
        </h3>
        <h3 className="md:text-xl lg:text-2xl text-gray-400">
          <span className="md:text-2xl lg:text-3xl font-semibold text-gray-500">
            Email:{" "}
          </span>
          {user.email}
        </h3>
        <h3 className="md:text-xl lg:text-2xl text-gray-400">
          <span className="md:text-2xl lg:text-3xl font-semibold text-gray-500">
            PhoneNumber:{" "}
          </span>
          {user.phone || "PhoneNumber not found"}
        </h3>
        <h3 className="md:text-xl lg:text-2xl text-gray-400">
          <span className="md:text-2xl lg:text-3xl font-semibold text-gray-500">
            Address:{" "}
          </span>
          {user.address || "Address not found"}
        </h3>
      </div>
      <hr className="my-4 w-full h-1 bg-gray-800 text-gray-800" />
      <div className="flex items-center justify-between gap-6">
        <Button
          onClick={() => setEditMode(true)}
          className="bg-sky-500 cursor-pointer hover:border-sky-500 border-2 text-white hover:bg-transparent border-transparent hover:text-sky-500"
        >
          <Edit2Icon />
        </Button>
        <Button
          onClick={() => deleteProfileHandler(router, dispatch)}
          className="bg-red-500 cursor-pointer hover:border-red-500 border-2 text-white hover:bg-transparent border-transparent hover:text-red-500"
        >
          <Trash2Icon />
        </Button>
      </div>
    </div>
  );
}

export default ProfileInfo;
