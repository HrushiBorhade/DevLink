import { INFINITE_SCROLLING_PAGINATION_RESULTS } from "@/config";
import { db } from "@/lib/db";
import { FC } from "react";
import PostFeed from "./PostFeed";
import { getAuthSession } from "@/lib/auth";

const CustomFeed = async ({}) => {
  const session = await getAuthSession();
  const followedCommunities = await db.subscription.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      community: true,
    },
  });
  var posts;
  posts = await db.post.findMany({
    where: {
      community: {
        name: {
          in: followedCommunities.map((com) => com.community.id),
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      votes: true,
      author: true,
      comments: true,
      community: true,
    },
    take: INFINITE_SCROLLING_PAGINATION_RESULTS,
  });

  if (posts.length === 0) {
    posts = await db.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
        votes: true,
        comments: true,
        community: true,
      },
      take: INFINITE_SCROLLING_PAGINATION_RESULTS,
    });
  }

  return <PostFeed initialPosts={posts} />;
};

export default CustomFeed;
