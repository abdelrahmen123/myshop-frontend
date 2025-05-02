"use client";
import { useState } from "react";
import type { LoginForm, LoginResponse } from "../../types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { loginSchema } from "../../_validations/login.validation";
import { useAppDispatch } from "@/lib/hooks/store.hooks";
import { login } from "@/lib/features/authSlice";

function LoginForm() {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const router = useRouter();
  const dispatch = useAppDispatch();

  const HandleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = loginSchema.safeParse(form);

    if (!result.success) {
      result.error?.errors.forEach((error) => {
        toast.error(error.message);
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      if (!response.ok) {
        toast.error("Something went wrong");
      }

      const data: LoginResponse = await response.json();
      if (data.status >= 400) {
        toast.error(data.message);
      } else {
        const oneDayInMs: number = 24 * 60 * 60 * 1000;
        const expiresAt: number = Date.now() + oneDayInMs;

        localStorage.setItem("token", data.data.accessToken);
        localStorage.setItem("expiresAt", expiresAt.toString());

        dispatch(login());

        toast.success(data.message);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <main className="flex justify-center items-center">
      <form
        onSubmit={HandleFormSubmit}
        className="flex flex-col gap-14 m-20 w-[65%] p-14 bg-sky-500 rounded-md justify-center"
      >
        <h1 className="text-3xl font-bold bg-sky-100 text-sky-950 p-4 text-center rounded md:">
          Login
        </h1>
        <hr />
        <input
          className="bg-sky-100 rounded-md text-sky-950 text-xl p-3"
          type="email"
          value={form.email}
          placeholder="Email..."
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="bg-sky-100 rounded-md text-sky-950 text-xl p-3"
          type="password"
          value={form.password}
          placeholder="Password..."
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-amber-500 rounded-md text-sky-50 text-xl p-3 font-semibold hover:bg-transparent border-4 border-transparent hover:border-amber-500 hover:text-amber-500">
          Submit
        </button>
      </form>
    </main>
  );
}

export default LoginForm;
