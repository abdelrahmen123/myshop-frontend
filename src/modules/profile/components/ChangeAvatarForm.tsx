import { Button } from "@/components/ui/button";
import { updateAvatarHandler } from "../logic/updateAvatarLogic";
import { useRef, useState } from "react";
import { User } from "@/lib/types/EntitiesTypes";
import { Loader2 } from "lucide-react";

function ChangeAvatarForm({
  setChangeMode,
  setProfile,
}: {
  setChangeMode: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<User>>;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const file = fileInputRef.current?.files?.[0];
        if (file) {
          const data = await updateAvatarHandler(file, setLoading);
          if (data.status < 400) {
            setProfile(data.data);
            setChangeMode(false);
          }
        }
      }}
      className="flex flex-col gap-4"
    >
      <input
        ref={fileInputRef}
        id="upload-avatar"
        type="file"
        className="block w-full text-sm text-gray-500
             file:mr-4 file:py-2 file:px-4
             file:rounded-full file:border-0
             file:text-sm file:font-semibold
             file:bg-sky-50 file:text-sky-700
             hover:file:bg-sky-100"
        accept="image/*"
      />

      <Button
        className={`${
          loading
            ? "cursor-progress flex justify-center items-center"
            : "cursor-pointer"
        } bg-sky-500 text-white hover:bg-transparent hover:border-sky-500 hover:border-3 hover:text-sky-500`}
        type="submit"
      >
        {loading ? (
          <Loader2 className="animate-spin text-white font-semibold" />
        ) : (
          "Upload"
        )}
      </Button>
    </form>
  );
}

export default ChangeAvatarForm;
