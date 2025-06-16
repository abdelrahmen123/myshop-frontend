"use client";
import { Button } from "@/components/ui/button";
import { Roles } from "@/lib/enums/rolesEnums";
import { User } from "@/lib/types/EntitiesTypes";
import React, { useState } from "react";
import { updateProfileHandler } from "../logic/updateProfileLogic";
import { Loader2 } from "lucide-react";

function EditForm({
  profile,
  setEditMode,
  setProfile,
}: {
  profile: User;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<User>>;
}) {
  const [updatedProfile, setUpdatedProfile] = useState<User>({
    id: profile.id || "",
    name: profile.name || "",
    email: profile.email || "",
    password: profile.password || "",
    role: profile.role || Roles.USER,
    image: profile.image || "",
    phone: profile.phone || "",
    address: profile.address || "",
    reviews: profile.reviews || [],
    orders: profile.orders || [],
    createdAt: profile.createdAt || "",
    updatedAt: profile.updatedAt || "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <form
      onSubmit={(e) =>
        updateProfileHandler(
          e,
          updatedProfile,
          setProfile,
          setEditMode,
          setLoading
        )
      }
      className="flex flex-col justify-between gap-5 mx-4 my-6"
    >
      <h1 className="text-3xl text-gray-600 text-semibold">Edit: </h1>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Name..."
          value={updatedProfile.name}
          onChange={(e) =>
            setUpdatedProfile({ ...updatedProfile, name: e.target.value })
          }
          className="text-2xl text-gray-500 p-2 outline-none bg-white rounded-2xl"
        />
        <input
          type="email"
          placeholder="Email..."
          value={updatedProfile.email}
          onChange={(e) =>
            setUpdatedProfile({ ...updatedProfile, email: e.target.value })
          }
          className="text-2xl text-gray-500 p-2 outline-none bg-white rounded-2xl"
        />
        <input
          type="text"
          placeholder="Phone..."
          value={updatedProfile.phone}
          onChange={(e) =>
            setUpdatedProfile({ ...updatedProfile, phone: e.target.value })
          }
          className="text-2xl text-gray-500 p-2 outline-none bg-white rounded-2xl"
        />

        <input
          type="text"
          placeholder="Address..."
          value={updatedProfile.address}
          onChange={(e) =>
            setUpdatedProfile({ ...updatedProfile, address: e.target.value })
          }
          className="text-2xl text-gray-500 p-2 outline-none bg-white rounded-2xl"
        />
      </div>
      <Button
        className={`${
          loading
            ? "cursor-progress flex justify-center items-center"
            : "cursor-pointer"
        } bg-sky-500 rounded-2 hover:bg-transparent hover:border-sky-500 border-2 text-white hover:text-sky-500`}
      >
        {loading ? (
          <Loader2 className="animate-spin text-white font-semibold" />
        ) : (
          "Update"
        )}
      </Button>
    </form>
  );
}

export default EditForm;
