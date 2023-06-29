import SubscribeLeaveToggle from "@/components/SubscribeLeaveToggle";
import { buttonVariants } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { Info, PlusIcon } from "lucide-react";
import ToFeedButton from "@/components/ToFeedButton";
const layout = async ({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  const session = await getAuthSession();
  const community = await db.community.findFirst({
    where: {
      name: slug,
    },
    include: {
      posts: {
        include: {
          author: true,
          votes: true,
        },
      },
    },
  });

  const subscription = !session?.user
    ? undefined
    : await db.subscription.findFirst({
        where: {
          community: {
            name: slug,
          },
          user: {
            id: session.user.id,
          },
        },
      });

  const isSubscribed = !!subscription;

  if (!community) return notFound();

  const memberCount = db.subscription.count({
    where: {
      community: {
        name: slug,
      },
    },
  });

  return (
    <div className="h-full mx-auto sm:container max-w-7xl">
      <div>
        {/* <ToFeedButton /> */}
        <ToFeedButton />
        <div className="grid grid-cols-1 py-6 md:grid-cols-3 gap-y-4 md:gap-x-4">
          <ul className="flex flex-col col-span-2 space-y-6">{children}</ul>

          {/* info sidebar */}
          <div className="order-first overflow-hidden sm:border rounded-xl h-fit md:order-last md:mt-20">
            <div className="hidden px-6 py-4 bg-gray-50 dark:bg-gray-900 sm:block">
              <p className="flex items-center py-2 font-semibold tracking-tight ">
                <Info className="w-5 h-5 mr-2 font-semibold"></Info>
                About d/{community.name}
              </p>
            </div>
            <dl className="hidden px-6 py-6 text-sm leading-6 divide-y divide-zinc-800 sm:block">
              <div className="flex justify-between py-3 gap-x-4">
                <dt className="text-gray-500">Created</dt>
                <dd className="text-gray-500">
                  <time dateTime={community.createdAt.toDateString()}>
                    {format(community.createdAt, "MMMM d, yyyy")}
                  </time>
                </dd>
              </div>
              <div className="flex justify-between py-3 gap-x-4">
                <dt className="text-gray-500">Members</dt>
                <dd className="flex items-start gap-x-2">
                  <div className="text-gray-500">{memberCount}</div>
                </dd>
              </div>
              {community.creatorId === session?.user?.id ? (
                <div className="flex justify-between py-3 gap-x-4">
                  <dt className="text-gray-500">You created this community</dt>
                </div>
              ) : null}
            </dl>
            <div className="px-6 pb-4 ">
              {community.creatorId !== session?.user?.id ? (
                <SubscribeLeaveToggle
                  isSubscribed={isSubscribed}
                  communityId={community.id}
                  communityName={community.name}
                />
              ) : null}
              <Link
                className={buttonVariants({
                  variant: "default",
                  className: "w-full sm:mb-6 font-medium cursor-copy",
                })}
                href={`/feed/d/${slug}/submit`}
              >
                <PlusIcon className="w-4 h-4 mr-2 font-medium" />
                Create Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
