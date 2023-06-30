import { buttonVariants } from "@/components/ui/Button";
import { HomeIcon, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { getAuthSession } from "@/lib/auth";
import GeneralFeed from "@/components/GeneralFeed";
import CustomFeed from "@/components/CustomFeed";

import { INFINITE_SCROLLING_PAGINATION_RESULTS } from "@/config";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const Home = async () => {
  const session = await getAuthSession();
  return (
    <>
      <h1 className="text-3xl font-bold font-heading md:text-4xl">Your feed</h1>
      <div className="grid grid-cols-1 py-6 md:grid-cols-3 gap-y-4 md:gap-x-4">
        {/* @ts-ignore */}
        {session ? <CustomFeed /> : <GeneralFeed />}
        {/* community info */}
        <div className="order-first overflow-hidden md:order-last">
          <div className="overflow-hidden border rounded-lg h-fit">
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 ">
              <p className="font-semibold pt-3 flex items-center gap-1.5">
                <HomeIcon className="w-4 h-4" />
                Home
              </p>
            </div>
            <dl className="p-4 px-6 -my-3 text-sm leading-6 divide-y divide-gray-100 ">
              <div className="flex justify-between py-3 gap-x-4">
                <p className="tracking-tight text-zinc-700 dark:text-zinc-400">
                  Your personal Devlink homepage. Come here to check in with
                  your favorite communities.
                </p>
              </div>

              <Link
                className={buttonVariants({
                  className:
                    "w-full mt-4 mb-6 font-medium flex items-center cursor-copy",
                })}
                href={`/feed/d/create`}
              >
                <PlusIcon className="w-4 h-4 mr-2 font-medium "></PlusIcon>
                Create Community
              </Link>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
