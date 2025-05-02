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

export type LoginResponse = {
  status: number;
  message: string;
  data: {
    accessToken: string;
  };
};
