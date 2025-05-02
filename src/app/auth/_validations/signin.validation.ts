import { z } from "zod";

export const signinSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be at most 20 characters long" }),

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

  confirmPassword: z
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

  phone: z
    .string()
    .optional()
    .refine((value) => !value || (value.length >= 10 && value.length <= 15), {
      message: "Phone must be between 10 and 15 characters long",
    }),

  address: z
    .string()
    .optional()
    .refine((value) => !value || (value.length >= 10 && value.length <= 100), {
      message: "Address must be between 10 and 100 characters long",
    }),
});
