"use client";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Loader2 } from "lucide-react";

function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const loginHandler = useLogin();

  return (
    <main className="flex justify-center items-center">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          loginHandler({ e, form, setLoading })
        }
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
        <button
          disabled={loading}
          className={`${
            loading ? "cursor-progress" : "cursor-pointer"
          } bg-amber-500 rounded-md text-sky-50 text-xl p-3 font-semibold hover:bg-transparent border-4 border-transparent flex justify-center items-center hover:border-amber-500 hover:text-amber-500`}
        >
          {loading ? (
            <Loader2 className="animate-spin text-white font-semibold" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </main>
  );
}

export default LoginForm;
