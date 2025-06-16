import { useRouter } from "next/navigation";
import { HandleRegisterFormSubmitParams } from "../authTypes";
import { handleRegisterFormSubmit } from "../logic/registerLogic";

export const useRegister = () => {
  const router = useRouter();

  return async ({
    e,
    form,
    setLoading,
  }: Omit<HandleRegisterFormSubmitParams, "router">) => {
    return handleRegisterFormSubmit({ e, form, router, setLoading });
  };
};
