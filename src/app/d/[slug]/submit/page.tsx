import { Editor } from "@/components/Editor";
import { Button } from "@/components/ui/Button";
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

  const community = await db.community.findFirst({
    where: {
      name: slug,
    },
  });

  if (!community) return notFound();
  return (
    <div className="flex flex-col items-start gap-6 px-6 py-4 rounded-xl">
      {/* heading */}
      <div className="pb-5 ">
        <div className="flex flex-wrap items-baseline -mt-2 -ml-2">
          <h3 className="mt-2 ml-2 text-2xl font-bold tracking-tighter ">
            Create post
          </h3>
          <p className="mt-1 ml-2 text-sm text-gray-500 truncate">
            in d/{params.slug}
          </p>
        </div>
      </div>

      {/* form */}
      <Editor communityId={community.id} />

      <div className="flex justify-end w-full">
        <Button
          type="submit"
          className="w-full font-medium"
          form="community-post-form"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default page;
