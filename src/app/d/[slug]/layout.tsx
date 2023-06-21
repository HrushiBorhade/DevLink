import SubscribeLeaveToggle from "@/components/SubscribeLeaveToggle";
import { buttonVariants } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

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

        <div className="grid grid-cols-1 py-6 md:grid-cols-3 gap-y-4 md:gap-x-4">
          <ul className="flex flex-col col-span-2 space-y-6">{children}</ul>

          {/* info sidebar */}
          <div className="order-first overflow-hidden rounded-xl bg-zinc-900 h-fit md:order-last md:mt-20">
            <div className="px-6 py-4 border-zinc-800 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-600">
              <p className="py-2 font-semibold text-gray-200 ">
                About d/{community.name}
              </p>
            </div>
            <dl className="px-6 py-6 text-sm leading-6 divide-y divide-zinc-800 bg-zinc-900">
              <div className="flex justify-between py-3 gap-x-4">
                <dt className="text-gray-500">Created</dt>
                <dd className="text-gray-500 ">
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
                  className: "w-full mb-6  rounded-xl",
                })}
                href={`d/${slug}/submit`}
              >
                Create Post🚀
              </Link>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
