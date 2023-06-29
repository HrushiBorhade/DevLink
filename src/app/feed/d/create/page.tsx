"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useCustomToast } from "@/hooks/use-custom-toast";
import { toast } from "@/hooks/use-toast";
import { CreateCommunityPayload } from "@/lib/validators/community";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const { loginToast } = useCustomToast();
  const { mutate: createCommunity, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateCommunityPayload = {
        name: input,
      };

      const { data } = await axios.post("/api/community", payload);
      return data as string;
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          return toast({
            title: "Community already exists.",
            description: "Please choose a different community name.",
            variant: "destructive",
          });
        }
        if (error.response?.status === 422) {
          return toast({
            title: "Invalid Community name.",
            description: "Please choose a name between 3-21 characters.",
            variant: "destructive",
          });
        }
        if (error.response?.status === 401) {
          return loginToast();
        }
      }
      toast({
        title: "Something went wrong",
        description: "Failed to create community.Please try again",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      router.push(`/feed/d/${data}`);
      router.refresh();
    },
  });

  return (
    <div className="container flex items-center h-full max-w-3xl mx-auto ">
      <div className="relative w-full px-8 py-4 space-y-6 border rounded-3xl h-fit">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tighter md:text-2xl">
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
