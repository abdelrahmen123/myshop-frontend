import { toast } from "react-toastify";
import {
  getExpiresAtFromLocalStorage,
  getTokenFromLocalStorage,
} from "../services/getTokenFromLocalStorage";
import { AppDispatch } from "@/lib/utils/store";
import { login } from "@/modules/auth/authSlice";
import { RouterType } from "@/lib/types/globalTypes";

const sessionGuardHandler = (dispatch: AppDispatch, router: RouterType) => {
  if (typeof window === "undefined") return;

  const token = getTokenFromLocalStorage();
  const expiresAt = getExpiresAtFromLocalStorage();

  if (!token || isNaN(expiresAt) || Date.now() > expiresAt) {
    toast.error("Your session has expired");
    router.refresh();
    router.push("/");
  } else {
    dispatch(login());
  }
};

export default sessionGuardHandler;
