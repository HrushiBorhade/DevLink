"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/Button";

const ToFeedButton = () => {
  const pathname = usePathname();

  const communityPath = getCommunityPath(pathname);

  return (
    <a href={communityPath} className={buttonVariants({ variant: "ghost" })}>
      <ChevronLeft className="w-4 h-4 mr-1" />
      {communityPath === "/feed" ? "Back home" : "Back to community"}
    </a>
  );
};

const getCommunityPath = (pathname: string) => {
  const splitPath = pathname.split("/");

  if (splitPath.length === 4) return "/feed";
  else if (splitPath.length > 4) return `/feed/${splitPath[2]}/${splitPath[3]}`;
  else return "/feed";
};

export default ToFeedButton;
