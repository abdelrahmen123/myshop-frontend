"use client";
import { Button } from "@/components/ui/button";
import { User } from "@/lib/types/EntitiesTypes";
import { Images } from "lucide-react";
import { useState } from "react";
import ChangeAvatarForm from "./ChangeAvatarForm";

function ProfileAvatar({
  user,
  setProfile,
}: {
  user: User;
  setProfile: React.Dispatch<React.SetStateAction<User>>;
}) {
  const [changeMode, setChangeMode] = useState<boolean>(false);

  const src = user.image
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${user.image}`
    : "/profile.png";

  return (
    <div className="flex  flex-col justify-center items-center p-4">
      <div className="w-40 h-40 lg:w-70 lg:h-70 flex items-center justify-center overflow-hidden rounded-full bg-gray-100 shadow-2xl my-5">
        <img
          src={src}
          alt={user.name}
          className="w-full h-full object-contain"
        />
      </div>
      {changeMode ? (
        <ChangeAvatarForm
          setChangeMode={setChangeMode}
          setProfile={setProfile}
        />
      ) : (
        <Button
          onClick={() => setChangeMode(true)}
          className="bg-sky-500 hover:border-sky-500 border-2 text-white hover:bg-transparent border-transparent hover:text-sky-500 cursor-pointer"
        >
          <Images className="mr-2 h-4 w-4" />
          Change avatar
        </Button>
      )}
    </div>
  );
}

export default ProfileAvatar;
//
