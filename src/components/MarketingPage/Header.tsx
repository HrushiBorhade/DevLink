import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import NavMenu from "./NavMenu";

import { ChevronRight, LogIn } from "lucide-react";
import { Button } from "./Button";
import { buttonVariants } from "../ui/Button";
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="fixed z-50 top-0 left-0 w-full border-b border-[#ffffff14] backdrop-blur-[12px]">
      <div className="container flex items-center h-12 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center ">
          <Image
            src="/logo.png"
            width={18}
            height={18}
            className="w-8 h-8 mr-2 md:h-6 md:w-6"
            alt="logo"
            priority
          />
          <p className="hidden text-xl font-bold tracking-tighter underline md:block decoration-indigo-500 ">
            Devlink
          </p>
        </Link>
        <div className="hidden ml-4 md:block">
          <NavMenu />
        </div>
        <div className="flex items-center h-full gap-4 ml-auto">
          <Link
            href="/sign-in"
            className={buttonVariants({ size: "sm", variant: "secondary" })}
          >
            {" "}
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
