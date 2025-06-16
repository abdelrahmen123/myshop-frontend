export const updateAvatarApiCall = async (
  token: string,
  formData: FormData
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile/avatar`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
