import { Button } from "@/components/ui/Button";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { FC } from "react";

interface pageProps {
  params: {
    slug: string;
  };
}

const page = ({ params }: pageProps) => {
  const { slug } = params;

  const community = db.community.findFirst({
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
          <h3 className="mt-2 ml-2 text-xl font-bold text-gray-200 underline underline-offset-4 decoration-indigo-500">
            Create Post
          </h3>
          <p className="mt-1 ml-2 text-sm text-gray-500 truncate">
            in d/{params.slug}
          </p>
        </div>
      </div>

      {/* form */}
      {/* <Editor subredditId={community.id} /> */}

      <div className="flex justify-end w-full">
        <Button
          type="submit"
          className="w-full font-medium rounded-xl"
          form="community-post-form"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default page;
