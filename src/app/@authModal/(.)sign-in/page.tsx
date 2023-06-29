"use client";
import CloseModal from "@/components/CloseModal";
import SignIn from "@/components/SignIn";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-40" onClick={() => router.back()}>
      <div className="flex items-center w-full h-full backdrop-blur-md md:backdrop-blur-sm">
        <div
          className="relative max-w-lg px-4 py-8 mx-auto border dark:bg-background h-fit rounded-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>

          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Page;
