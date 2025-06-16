import { z } from "zod";

export const UpdateProfileSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be at most 20 characters long" })
    .transform((val) => (val === "" ? undefined : val))
    .optional(),

  email: z
    .string({ message: "Email is required" })
    .email("Invalid email")
    .transform((val) => (val === "" ? undefined : val))
    .optional(),

  phone: z
    .string()
    .transform((val) => (val === "" ? undefined : val))
    .optional()
    .refine((value) => !value || (value.length >= 10 && value.length <= 15), {
      message: "Phone must be between 10 and 15 characters long",
    }),

  address: z
    .string()
    .optional()
    .transform((val) => (val === "" ? undefined : val))
    .refine((value) => !value || (value.length >= 10 && value.length <= 100), {
      message: "Address must be between 10 and 100 characters long",
    }),
});

export type UpdateProfileForm = z.infer<typeof UpdateProfileSchema>;
