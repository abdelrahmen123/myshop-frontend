"use client";
import { useState } from "react";
import ProfileAvatar from "./ProfileAvatar";
import { User } from "@/lib/types/EntitiesTypes";
import { useFetchProfile } from "../hooks/useFetchProfile";
import { Roles } from "@/lib/enums/rolesEnums";
import ProfileInfo from "./ProfileInfo";
import EditForm from "./EditForm";

function ProfilePageBody() {
  const [profile, setProfile] = useState<User>({
    id: "",
    name: "Unknown",
    email: "",
    password: "",
    role: Roles.USER,
    image: "",
    phone: "",
    address: "",
    reviews: [],
    orders: [],
    createdAt: "",
    updatedAt: "",
  });
  const [editMode, setEditMode] = useState<boolean>(false);

  useFetchProfile(setProfile);

  return (
    <main>
      <h1 className="text-4xl text-gray-600 font-bold text-center underline">
        Profile Page
      </h1>
      <div className="flex flex-col lg:flex-row my-10 mx-10 lg:mx-20 justify-around items-center bg-sky-100 shadow-2xl ">
        <ProfileAvatar user={profile} setProfile={setProfile} />
        {editMode ? (
          <EditForm
            setProfile={setProfile}
            profile={profile}
            setEditMode={setEditMode}
          />
        ) : (
          <ProfileInfo setEditMode={setEditMode} user={profile} />
        )}
      </div>
    </main>
  );
}

export default ProfilePageBody;
