import { useMemo } from "react";
import { calcPaginationHandler } from "../logic/paginationLogic";

const useMemoPagination = (totalPages: number, currentPage: number) => {
  return useMemo(() => {
    return calcPaginationHandler(totalPages, currentPage);
  }, [currentPage, totalPages]);
};

export default useMemoPagination;
