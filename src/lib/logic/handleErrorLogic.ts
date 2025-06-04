import { toast } from "react-toastify";

const handleError = (error: any) => {
  console.log(error);
  toast.error("Something went wrong");
};

export default handleError;
