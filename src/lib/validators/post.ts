import { z } from "zod";

export const PostValidator = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be atleast 3 characters" })
    .max(128, { message: "Title should be at most 128 characters long" }),
  communityId: z.string(),
  content: z.any(),
});

export type PostCreationRequest = z.infer<typeof PostValidator>;
