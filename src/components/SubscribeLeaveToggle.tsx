"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";
import { useMutation } from "@tanstack/react-query";
import { SubscribeToCommunityPayload } from "@/lib/validators/community";
import axios, { AxiosError } from "axios";
import { useCustomToast } from "@/hooks/use-custom-toast";
import { toast } from "@/hooks/use-toast";
import { startTransition } from "react";
import { Trash2 } from "lucide-react";

interface SubscribeLeaveToggleProps {
  isSubscribed: boolean;
  communityName: string;
  communityId: string;
}

const SubscribeLeaveToggle = ({
  isSubscribed,
  communityId,
  communityName,
}: SubscribeLeaveToggleProps) => {
  const router = useRouter();
  const { loginToast } = useCustomToast();
  const { mutate: subscribe, isLoading: isSubscribing } = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToCommunityPayload = {
        communityId,
      };

      const { data } = await axios.post("/api/community/subscribe", payload);
      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }

      return toast({
        title: "There was a problem.",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      startTransition(() => {
        router.refresh();
      });
      toast({
        title: "Subscribed!✨",
        description: `You are now subscribed to d/${communityName}`,
      });
    },
  });
  const { mutate: unsubscribe, isLoading: isUnsubscribing } = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToCommunityPayload = {
        communityId,
      };

      const { data } = await axios.post("/api/community/unsubscribe", payload);
      return data as string;
    },
    onError: (err: AxiosError) => {
      toast({
        title: "Error",
        description: err.response?.data as string,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      startTransition(() => {
        router.refresh();
      });
      toast({
        title: "Unsubscribed!",
        description: `You are now unsubscribed from/${communityName}`,
      });
    },
  });
  return isSubscribed ? (
    <Button
      className="w-full mt-1 mb-4 border-b-2 "
      variant="outline"
      isLoading={isUnsubscribing}
      onClick={() => unsubscribe()}
    >
      <Trash2 className="w-4 h-4 mr-1" />
      Leave Community
    </Button>
  ) : (
    <Button
      className="w-full mb-4"
      isLoading={isSubscribing}
      onClick={() => subscribe()}
      variant="outline"
    >
      Join to Post🚀
    </Button>
  );
};

export default SubscribeLeaveToggle;
