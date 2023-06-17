import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/Button";
import { ThemeToggle } from "./theme-toggle";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 z-40 py-2 border-b bg-background h-fit">
      <div className="container flex items-center justify-between h-full gap-2 mx-auto max-w-7xl">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            width={24}
            height={24}
            className="w-8 h-8 sm:h-6 sm:w-6"
            alt="logo"
          />
          <p className="hidden font-bold underline text-md md:block decoration-indigo-500 ">
            Devlink
          </p>
        </Link>

        {/* SearchBar */}
        <div className="flex items-center justify-between gap-2">
          {/* <Link
            href="/sign-in"
            className={buttonVariants({ variant: "outline" })}
          >
            Sign In
          </Link> */}
          {session?.user ? (
            <>
              <ThemeToggle />
              {/* <UserAccountNav user={session.user} /> */}
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <button className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-6 py-2 transition-all duration-75 ease-in bg-white rounded-md dark:bg-gray-900 group-hover:bg-opacity-0">
                    Sign In
                  </span>
                </button>
              </Link>
              <ThemeToggle />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
