import { useEffect } from "react";
import { calcTotalPages } from "../logic/paginationLogic";

const useFetchPagesCount = (
  setTotalPages: React.Dispatch<React.SetStateAction<number>>
) => {
  useEffect(() => {
    calcTotalPages(setTotalPages);
  }, []);
};

export default useFetchPagesCount;
