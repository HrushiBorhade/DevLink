import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/Button";
import { ThemeToggle } from "./theme-toggle";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import SearchBar from "./SearchBar";
const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 z-40 py-2 border-b dark:border-zinc-800 bg-background h-fit">
      <div className="container flex items-center justify-between h-full gap-2 mx-auto max-w-7xl">
        {/* logo */}
        <Link href="/feed" className="flex items-center w-20 gap-2 md:w-fit ">
          <Image
            src="/logo.png"
            width={24}
            height={24}
            className="w-8 h-8 sm:h-6 sm:w-6"
            alt="logo"
            priority
          />
          <p className="hidden text-2xl font-bold tracking-tighter underline md:block decoration-indigo-500 ">
            Devlink
          </p>
        </Link>

        {/* SearchBar */}
        <SearchBar />

        <div className="flex items-center justify-between gap-2">
          {session?.user ? (
            <>
              <ThemeToggle />
              <UserAccountNav user={session.user} />
            </>
          ) : (
            <>
              <ThemeToggle />

              <Link
                href="/sign-in"
                className={cn(
                  "font-semibold my-1",
                  buttonVariants({ variant: "default" })
                )}
              >
                <LogIn className="hidden w-4 h-4 mr-2 font-semibold sm:block" />
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
