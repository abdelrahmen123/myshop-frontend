import handleError from "@/lib/logic/handleErrorLogic";
import { fetchProfileApiCall } from "../services/fetchProfileService";
import { toast } from "react-toastify";
import { User } from "@/lib/types/EntitiesTypes";

export const fetchProfileHandler = async (
  token: string,
  setProfile: React.Dispatch<React.SetStateAction<User>>
) => {
  try {
    const data = await fetchProfileApiCall(token);

    toast.success(data.message);
    setProfile(data.data);

    return data;
  } catch (error) {
    handleError(error);
  }
};
