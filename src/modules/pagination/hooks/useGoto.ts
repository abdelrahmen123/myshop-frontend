import { useAppDispatch } from "@/lib/hooks/store.hooks";
import { setPageNumber } from "@/modules/product/productSlice";

const useGoto = () => {
  const dispatch = useAppDispatch();

  return (page: number, currentPage: number) => {
    if (page !== currentPage) {
      dispatch(setPageNumber(page));
    }
  };
};

export default useGoto;
