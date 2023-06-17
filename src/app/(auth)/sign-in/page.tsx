import { buttonVariants } from "@/components/ui/Button";
import { FC } from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import SignIn from "@/components/SignIn";
const SignInPage: FC = ({}) => {
  return (
    <div className="absolute inset-0">
      <div className="flex flex-col items-center justify-center h-full max-w-2xl gap-20 mx-auto">
        <Link
          href="/"
          className="flex items-center self-start -mt-20 text-sm hover:underline hover:underline-offset-4 hover:decoration-indigo-500 "
        >
          <Icons.chevronLeft className="flex items-center w-3 h-3" />
          Back
        </Link>
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
