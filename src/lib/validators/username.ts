import { z } from "zod";

export const UsernameValidator = z.object({
  name: z
    .string()
    .min(3)
    .max(32)
    .regex(/^[a-zA-A0-9]+$/),
});
