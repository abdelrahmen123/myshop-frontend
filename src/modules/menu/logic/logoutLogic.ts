import { logout } from "@/modules/auth/authSlice";
import { RouterType } from "@/lib/types/globalTypes";
import { AppDispatch } from "@/lib/utils/store";

const logoutHandler = (dispatch: AppDispatch, router: RouterType) => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiresAt");
  dispatch(logout());
  router.push("/");
};

export default logoutHandler;
