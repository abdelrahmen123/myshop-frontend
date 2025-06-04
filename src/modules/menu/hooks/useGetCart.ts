import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/store.hooks";
import getUserCartHandler from "../logic/getUserCartLogic";

export const useGetUserCart = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      getUserCartHandler(dispatch);
    }
  }, [isAuthenticated, dispatch]);
};
