"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Image as ImageIcon, Link2 } from "lucide-react";
import { FC } from "react";

import type { Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation";
import UserAvatar from "./UserAvatar";

interface MiniCreatePostProps {
  session: Session | null;
}

const MiniCreatePost: FC<MiniCreatePostProps> = ({ session }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="overflow-hidden rounded-md shadow bg-zinc-900 ">
      <div className="flex flex-col justify-between h-full gap-6 px-6 py-4 md:flex-row">
        <div className="relative ">
          <UserAvatar
            user={{
              name: session?.user.name || null,
              image: session?.user.image || null,
            }}
          />

          <span className="absolute w-2 h-2 bg-green-500 rounded-full left-8 bottom-1.5 md:bottom-0 md:right-0 outline outline-1 outline-white" />
        </div>

        <Input
          onClick={() => router.push(pathname + "/submit")}
          readOnly
          placeholder="Create post"
          className="border-none bg-zinc-800"
        />
        <div className="flex">
          <Button
            onClick={() => router.push(pathname + "/submit")}
            variant="ghost"
          >
            <ImageIcon className="text-zinc-700" />
          </Button>
          <Button
            onClick={() => router.push(pathname + "/submit")}
            variant="ghost"
          >
            <Link2 className="text-zinc-700" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiniCreatePost;
