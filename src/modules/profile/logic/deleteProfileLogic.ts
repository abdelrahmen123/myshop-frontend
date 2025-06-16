import handleError from "@/lib/logic/handleErrorLogic";
import { getTokenFromLocalStorage } from "@/modules/menu/services/getTokenFromLocalStorage";
import { deleteProfileApiCall } from "../services/deleteProfileService";
import { toast } from "react-toastify";
import { RouterType } from "@/lib/types/globalTypes";
import { AppDispatch } from "@/lib/store";
import { logout } from "@/modules/auth/authSlice";

export const deleteProfileHandler = async (
  router: RouterType,
  dispatch: AppDispatch
) => {
  try {
    const token: string = getTokenFromLocalStorage() as string;
    const data = await deleteProfileApiCall(token);

    if (data.status >= 400) {
      toast.error(data.message);
      return;
    }

    localStorage.removeItem("token");
    dispatch(logout());
    router.replace("/");

    toast.success(data.message);
    return data;
  } catch (error) {
    handleError(error);
  }
};
