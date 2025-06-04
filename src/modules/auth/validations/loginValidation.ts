import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ message: "Email is required" }).email("Invalid email"),

  password: z
    .string({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least 1 lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least 1 uppercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least 1 number" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least 1 special character",
    }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
