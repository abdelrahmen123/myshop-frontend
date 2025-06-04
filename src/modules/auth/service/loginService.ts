import { LoginForm } from "../authTypes";

const loginApiCall = async (form: LoginForm) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default loginApiCall;
