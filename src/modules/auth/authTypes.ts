import { AppDispatch } from "@/lib/store";
import { ApiResponse, RouterType } from "@/lib/types/globalTypes";

export type RegisterForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string | null;
  address?: string | null;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type LoginResponse = ApiResponse<{ accessToken: string }>;

export type HandleLoginFormSubmitParams = {
  e: React.FormEvent<HTMLFormElement>;
  form: LoginForm;
  dispatch: AppDispatch;
  router: RouterType;
};

export type HandleRegisterFormSubmitParams = {
  e: React.FormEvent<HTMLFormElement>;
  form: RegisterForm;
  router: RouterType;
};
