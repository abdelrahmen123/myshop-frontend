import handleError from "@/lib/logic/handleErrorLogic";
import { updateProfileApiCall } from "../services/updateProfileService";
import { toast } from "react-toastify";
import { getTokenFromLocalStorage } from "@/modules/menu/services/getTokenFromLocalStorage";
import { User } from "@/lib/types/EntitiesTypes";
import { UpdateUserDto } from "../userTypes";
import { UpdateProfileSchema } from "../validations/updateProfileValidation";

export const updateProfileHandler = async (
  e: React.FormEvent<HTMLFormElement>,
  updateProfileDto: UpdateUserDto,
  setProfile: React.Dispatch<React.SetStateAction<User>>,
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();

  const result = UpdateProfileSchema.safeParse(updateProfileDto);

  if (!result.success) {
    result.error?.errors.forEach((error) => {
      toast.error(error.message);
    });
    return;
  }

  const reqBodyParams = formatUpdateProfileReq(updateProfileDto);

  try {
    setLoading(true);

    const token = getTokenFromLocalStorage() as string;
    const data = await updateProfileApiCall(token, reqBodyParams);

    if (data.status >= 400) {
      toast.error(data.message);
      return;
    }

    toast.success(data.message);

    setProfile(data.data);

    setLoading(false);

    setEditMode(false);
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
  }
};

const formatUpdateProfileReq = (updateProfileDto: UpdateUserDto) => {
  return {
    name: updateProfileDto.name === "" ? undefined : updateProfileDto.name,
    email: updateProfileDto.email === "" ? undefined : updateProfileDto.email,
    phone: updateProfileDto.phone === "" ? undefined : updateProfileDto.phone,
    address:
      updateProfileDto.address === "" ? undefined : updateProfileDto.address,
  };
};
