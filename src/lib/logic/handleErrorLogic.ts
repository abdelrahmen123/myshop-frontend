import { toast } from "react-toastify";

const handleError = (error: unknown) => {
  console.log(error);
  toast.error("Something went wrong");
};

export default handleError;
