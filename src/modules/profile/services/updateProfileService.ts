import { UpdateUserDto } from "../userTypes";

export const updateProfileApiCall = async (
  token: string,
  updateProfileDto: UpdateUserDto
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateProfileDto),
      }
    );

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
