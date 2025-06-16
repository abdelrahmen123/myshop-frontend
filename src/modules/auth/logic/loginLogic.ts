import { HandleLoginFormSubmitParams } from "./../authTypes";
import { toast } from "react-toastify";
import { LoginResponse } from "../authTypes";
import { loginSchema } from "../validations/loginValidation";
import loginApiCall from "../service/loginService";
import handleError from "@/lib/logic/handleErrorLogic";
import setTokenInLocalStorage from "../service/setTokenInLocalStorage";
import { login } from "@/modules/auth/authSlice";

export const handleFormSubmit = async ({
  e,
  form,
  dispatch,
  router,
  setLoading,
}: HandleLoginFormSubmitParams) => {
  e.preventDefault();

  const result = loginSchema.safeParse(form);

  if (!result.success) {
    result.error?.errors.forEach((error) => {
      toast.error(error.message);
    });
    return;
  }

  try {
    setLoading(true);
    const data: LoginResponse = await loginApiCall(form);

    if (data === null) {
      toast.error("Something went wrong");
      return;
    }

    if (data.status >= 400) {
      toast.error(data.message);
    } else {
      setTokenInLocalStorage(data.data.accessToken);

      dispatch(login());

      toast.success(data.message);
      setLoading(false);
      router.push("/");
    }
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
  }
};
