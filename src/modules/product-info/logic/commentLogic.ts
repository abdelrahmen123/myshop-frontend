import handleError from "@/lib/logic/handleErrorLogic";
import { createCommentApiCall } from "../services/commentService";
import { toast } from "react-toastify";

export const createCommentHandler = async (
  text: string,
  productId: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);

    const data = await createCommentApiCall(text, productId);
    toast.success(data.message);

    setLoading(false);

    return data.data;
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
  }
};
