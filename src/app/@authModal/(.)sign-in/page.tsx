"use client";
import CloseModal from "@/components/CloseModal";
import SignIn from "@/components/SignIn";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-10" onClick={() => router.back()}>
      <div className="container flex items-center h-full max-w-lg mx-auto ">
        <div
          className="relative w-full py-8 bg-zinc-800 h-fit rounded-2xl"
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
