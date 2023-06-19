"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { toast } from "@/hooks/use-toast";
import { CreateCommunityPayload } from "@/lib/validators/community";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");

  const { mutate: createCommunity, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateCommunityPayload = {
        name: input,
      };

      const { data } = await axios.post("/api/community", payload);
      return data as string;
    },
  });

  return (
    <div className="container flex items-center h-full max-w-3xl mx-auto ">
      <div className="relative w-full p-8 space-y-6 border rounded-3xl h-fit">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold md:text-xl">
            Create a Community
          </h1>
        </div>

        <hr className="h-px " />

        <div>
          <p className="text-lg font-medium">Name</p>
          <p className="py-2 text-xs text-zinc-500">
            Community names including capitalization cannot be changed.
          </p>
          <div className="relative">
            <p className="absolute inset-y-0 left-0 grid w-8 text-sm place-items-center text-zinc-400">
              d/
            </p>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="pl-6 rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col justify-end gap-4 md:flex-row">
          <Button
            disabled={isLoading}
            variant="outline"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            isLoading={isLoading}
            disabled={input.length === 0}
            onClick={() => createCommunity()}
          >
            Create Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
