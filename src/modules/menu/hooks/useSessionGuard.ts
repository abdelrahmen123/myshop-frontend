import { useAppDispatch } from "@/lib/hooks/store.hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import sessionGuardHandler from "../logic/sessionGuardLogic";

export const useSessionGuard = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    sessionGuardHandler(dispatch, router);
  }, [router]);
};
