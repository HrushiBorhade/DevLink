import MiniCreatePost from "@/components/MiniCreatePost";
import { INFINITE_SCROLLING_PAGINATION_RESULTS } from "@/config";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { FC } from "react";

interface pageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: pageProps) => {
  const { slug } = params;
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
          comments: true,
          community: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: INFINITE_SCROLLING_PAGINATION_RESULTS,
      },
    },
  });
  if (!community) {
    return notFound();
  }
  return (
    <>
      <h1 className="pt-2 text-2xl font-bold tracking-tight underline underline-offset-4 decoration-indigo-500 md:text-3xl h-14">
        d/{community.name}
      </h1>
      <MiniCreatePost session={session} />
    </>
  );
};

export default page;
