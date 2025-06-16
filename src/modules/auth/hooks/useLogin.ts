import { useAppDispatch } from "@/lib/hooks/store.hooks";
import { useRouter } from "next/navigation";
import { HandleLoginFormSubmitParams } from "../authTypes";
import { handleFormSubmit } from "../logic/loginLogic";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return async ({
    e,
    form,
    setLoading,
  }: Omit<HandleLoginFormSubmitParams, "dispatch" | "router">) => {
    return handleFormSubmit({ e, form, dispatch, router, setLoading });
  };
};
