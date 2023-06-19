import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { toast } from "./use-toast";

export const useCustomToast = () => {
  const loginToast = () => {
    const { dismiss } = toast({
      title: "Login Required",
      description: "You need to logged in to perform that action.",
      variant: "destructive",
      action: (
        <Link
          href="/sign-in"
          className={buttonVariants()}
          onClick={() => dismiss()}
        >
          Login
        </Link>
      ),
    });
  };
  return { loginToast };
};
