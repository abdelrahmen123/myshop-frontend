import { toast } from "react-toastify";
import { HandleRegisterFormSubmitParams, RegisterForm } from "../authTypes";
import { registerApiCall } from "../service/registerService";
import { registerSchema } from "../validations/registerValidation";
import handleError from "@/lib/logic/handleErrorLogic";

export const handleRegisterFormSubmit = async ({
  e,
  form,
  router,
  setLoading,
}: HandleRegisterFormSubmitParams) => {
  e.preventDefault();

  const result = registerSchema.safeParse(form);

  if (!result.success || form.password !== form.confirmPassword) {
    result.error?.errors.forEach((error) => {
      toast.error(error.message);
    });
    return;
  }

  const reqData: Omit<RegisterForm, "confirmPassword"> = {
    name: form.name,
    email: form.email,
    password: form.password,
  };

  if (form.phone && form.phone?.length > 0) reqData.phone = form.phone;
  if (form.address && form.address?.length > 0) reqData.address = form.address;

  try {
    setLoading(true);

    const data = await registerApiCall(reqData);

    if (data.status >= 400) {
      toast.error(data.message);

      setLoading(false);
    } else {
      toast.success(data.message);
      setLoading(false);
      router.push("/auth/login");
    }
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
  }
};
