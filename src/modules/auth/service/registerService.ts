import { RegisterForm } from "../authTypes";

export const registerApiCall = async (
  reqData: Omit<RegisterForm, "confirmPassword">
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
