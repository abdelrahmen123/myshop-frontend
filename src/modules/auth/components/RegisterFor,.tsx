"use client";
import { useState } from "react";
import type { RegisterForm } from "../authTypes";
import { useRegister } from "../hooks/useRegister";

function RegisterForm() {
  const [form, setForm] = useState<RegisterForm>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    address: "",
  });

  const registerHandler = useRegister();

  return (
    <main className="flex justify-center items-center">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          registerHandler({ e, form })
        }
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
