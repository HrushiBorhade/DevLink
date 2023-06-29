"use client";
import { User } from "next-auth";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropDownMenu";
import UserAvatar from "./UserAvatar";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface UserAccountNavProps {
  user: Pick<User, "name" | "email" | "image">;
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <UserAvatar
        user={{ name: user.name || null, image: user.image || null }}
        className="w-8 h-8"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="" align="end">
      <div className="flex items-center justify-start gap-2 p-2">
        <div className="flex flex-col space-y-2 leading-none">
          {user.name && (
            <p className="font-medium underline decoration-indigo-400 underline-offset-4 text-primary">
              {user.name}
            </p>
          )}
          {user.email && (
            <p className="w-[220px] truncate text-sm text-muted-foreground">
              {user.email}
            </p>
          )}
        </div>
      </div>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link href="/feed">Feed</Link>
      </DropdownMenuItem>

      <DropdownMenuItem asChild>
        <Link href="/feed/d/create">Create Community</Link>
      </DropdownMenuItem>

      <DropdownMenuItem asChild>
        <Link href="/feed/settings">Settings</Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        className="cursor-pointer"
        onSelect={(event) => {
          event.preventDefault();
          signOut({
            callbackUrl: `${window.location.origin}/sign-in`,
          });
        }}
      >
        Sign out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default UserAccountNav;
