import { buttonVariants } from "@/components/ui/Button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold md:text-4xl">Your feed</h1>
      <div className="grid grid-cols-1 py-6 md:grid-cols-3 gap-y-4 md:gap-x-4">
        {/* community info */}
        <div className="order-first overflow-hidden border rounded-lg h-fit md:order-last">
          <div className="px-6 py-4 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-600">
            <p className="font-semibold py-3 flex items-center gap-1.5">
              <HomeIcon className="w-4 h-4" />
              Home
            </p>
          </div>
          <dl className="px-6 py-4 -my-3 text-sm leading-6 divide-y divide-gray-100">
            <div className="flex justify-between py-3 gap-x-4">
              <p className="text-zinc-500">
                Your personal Devlink homepage. Come here to check in with your
                favorite communities.
              </p>
            </div>

            <Link
              className={buttonVariants({
                className: "w-full mt-4 mb-6",
              })}
              href={`/d/create`}
            >
              Create Community
            </Link>
          </dl>
        </div>
      </div>
    </>
  );
};
export default Home;
