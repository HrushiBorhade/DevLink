import { formatTimeToNow } from "@/lib/utils";
import { Post, User, Vote, VoteType } from "@prisma/client";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { FC, useRef } from "react";
import EditorOutput from "./EditorOutput";
import PostVoteClient from "./post-vote/PostVoteClient";

type PartialVote = Pick<Vote, "type">;
interface PostProps {
  post: Post & {
    author: User;
    votes: Vote[];
  };

  communityName?: string;
  commentAmt: number;
  votesAmt: number;
  currentVote?: PartialVote;
}

const Post: FC<PostProps> = ({
  post,
  communityName,
  commentAmt,
  votesAmt,
  currentVote,
}) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  return (
    <div className="border rounded-md shadow ">
      <div className="flex justify-between px-6 pt-4">
        {/* Todo: Votes */}
        <PostVoteClient
          postId={post.id}
          initialVotesAmt={votesAmt}
          initialVote={currentVote?.type}
        />
        <div className="flex-1 w-0">
          <div className="mt-1 text-xs text-gray-500 max-h-40 dark:text-zinc-500">
            {communityName ? (
              <>
                <a
                  className="text-sm font-medium underline text-zinc-900 dark:text-white underline-offset-2 decoration-indigo-500 "
                  href={`/feed/d/${communityName}`}
                >
                  d/{communityName}
                </a>
                <span className="px-1">•</span>
              </>
            ) : null}
            <span>Posted by u/{post.author.username}</span>
            {"  "}
            {formatTimeToNow(new Date(post.createdAt))}
          </div>
          <a href={`/feed/d/${communityName}/post/${post.id}`}>
            <h1 className="py-2 mb-4 text-lg font-semibold leading-6 tracking-tight text-gray-900 dark:text-gray-200">
              {post.title}
            </h1>
          </a>

          <div
            className="relative w-full text-sm max-h-40 overflow-clip"
            ref={pRef}
          >
            <EditorOutput content={post.content} />
            {pRef.current?.clientHeight === 160 ? (
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-[#030612] to-transparent"></div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="z-20 px-4 py-4 text-sm bg-gray-50 dark:bg-gray-900 sm:px-6 ">
        <Link
          href={`/feed/d/${communityName}/post/${post.id}`}
          className="flex items-center gap-2 w-fit"
        >
          <MessageSquare className="w-4 h-4" /> {commentAmt} comments
        </Link>
      </div>
    </div>
  );
};

export default Post;
