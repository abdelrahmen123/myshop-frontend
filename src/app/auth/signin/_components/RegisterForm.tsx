"use client";
import { useState } from "react";
import type { RegisterForm } from "../../types";
import { useRouter } from "next/navigation";
import { signinSchema } from "../../_validations/signin.validation";
import { toast } from "react-toastify";

function RegisterForm() {
  const [form, setForm] = useState<RegisterForm>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    address: "",
  });

  const router = useRouter();

  const HandleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = signinSchema.safeParse(form);

    if (!result.success || form.password !== form.confirmPassword) {
      result.error?.errors.forEach((error) => {
        toast.error(error.message);
      });
      return;
    }

    const reqData: Omit<RegisterForm, "confirmPassword"> = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    if (form.phone && form.phone?.length > 0) reqData.phone = form.phone;
    if (form.address && form.address?.length > 0)
      reqData.address = form.address;

    try {
      const response = await fetch(`http://localhost:8000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
      });

      if (!response.ok) {
        toast.error("Something went wrong");
      }

      const data = await response.json();

      if (data.status >= 400) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        router.push("/auth/login");
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
          Signin
        </h1>
        <hr />
        <input
          className="bg-sky-100 rounded-md text-sky-950 text-xl p-3"
          type="text"
          value={form.name || ""}
          placeholder="Name..."
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
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
        <input
          className="bg-sky-100 rounded-md text-sky-950 text-xl p-3"
          type="password"
          value={form.confirmPassword}
          placeholder="Confirm Password..."
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
        />
        <input
          className="bg-sky-100 rounded-md text-sky-950 text-xl p-3"
          type="text"
          value={form.phone || ""}
          placeholder="Phone..."
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          className="bg-sky-100 rounded-md text-sky-950 text-xl p-3"
          type="text"
          value={form.address || ""}
          placeholder="Address..."
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <button className="bg-amber-500 rounded-md text-sky-50 text-xl p-3 font-semibold hover:bg-transparent border-4 border-transparent hover:border-amber-500 hover:text-amber-500">
          Submit
        </button>
      </form>
    </main>
  );
}

export default RegisterForm;
