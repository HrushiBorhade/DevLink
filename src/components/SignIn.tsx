import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";
const SignIn: FC = ({}) => {
  return (
    <div className="container mx-auto flex flex-col  justify-center space-y-6 max-w-[360px]  p-2 py-6">
      <div className="flex flex-col gap-2 space-y-2 text-center">
        <Image
          src="/logo.png"
          width={48}
          height={48}
          alt="logo"
          className="mx-auto my-2"
        />
        <h1 className="text-2xl font-bold tracking-tighter">Welcome back</h1>
        <p className="max-w-xs mx-auto text-xs text-center text-gray-400">
          By continuing, you are setting up a Devlink account and agree to our
          User Agreement and Privacy Policy
        </p>
        {/* Sign in Form */}
        <UserAuthForm />
        {/* <p className="px-8 my-2 text-sm text-center text-gray-400">
          New to Devlink?{" "}
          <Link
            href="/sign-up"
            className="text-sm hover:underline hover:text-gray-600 hover:underline-offset-4 hover:decoration-indigo-500 "
          >
            Sign Up
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default SignIn;
