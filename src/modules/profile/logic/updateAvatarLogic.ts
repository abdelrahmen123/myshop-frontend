import { getTokenFromLocalStorage } from "@/modules/menu/services/getTokenFromLocalStorage";
import { updateAvatarApiCall } from "../services/updateAvatarService";
import handleError from "@/lib/logic/handleErrorLogic";
import { toast } from "react-toastify";

export const updateAvatarHandler = async (
  file: File,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    setLoading(true);
    const token: string = getTokenFromLocalStorage() as string;
    const data = await updateAvatarApiCall(token, formData);

    if (data.status >= 400) {
      toast.error(data.message);
      setLoading(false);
      return;
    }

    toast.success(data.message);
    setLoading(false);
    return data;
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
  }
};
