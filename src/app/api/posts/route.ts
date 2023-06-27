import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

export async function GET(req: Request) {
  const url = new URL(req.url);

  const session = await getAuthSession();

  let followedCommunitiesIds: string[] = [];

  if (session) {
    const followedCommunities = await db.subscription.findMany({
      where: {
        userId: session?.user.id,
      },
      include: {
        community: true,
      },
    });
    followedCommunitiesIds = followedCommunities.map((com) => com.community.id);
  }

  try {
    const { communityName, page, limit } = z
      .object({
        limit: z.string(),
        page: z.string(),
        communityName: z.string().nullish().optional(),
      })
      .parse({
        limit: url.searchParams.get("limit"),
        page: url.searchParams.get("page"),
        communityName: url.searchParams.get("communityName"),
      });

    let whereClause = {};

    if (communityName) {
      whereClause = {
        community: {
          name: communityName,
        },
      };
    } else if (session) {
      whereClause = {
        community: {
          id: {
            in: followedCommunitiesIds,
          },
        },
      };
    }
    const posts = await db.post.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
      orderBy: {
        createdAt: "desc",
      },
      include: {
        community: true,
        votes: true,
        author: true,
        comments: true,
      },
      where: whereClause,
    });
    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response("Could not fetch posts", { status: 500 });
  }
}
