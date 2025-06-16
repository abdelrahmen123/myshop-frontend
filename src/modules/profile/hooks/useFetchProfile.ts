import { getTokenFromLocalStorage } from "@/modules/menu/services/getTokenFromLocalStorage";
import { useEffect } from "react";
import { fetchProfileHandler } from "../logic/fetchProfileLogic";
import { User } from "@/lib/types/EntitiesTypes";

export const useFetchProfile = (
  setProfile: React.Dispatch<React.SetStateAction<User>>
) => {
  useEffect(() => {
    const token = getTokenFromLocalStorage() as string;
    fetchProfileHandler(token, setProfile);
  }, [setProfile]);
};
