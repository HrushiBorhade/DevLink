import { Button } from "@/components/MarketingPage/Button";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/MarketingPage/Hero";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import HeroImage from "@/components/MarketingPage/HeroImage";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="">
      <main>
        <div className="container pt-32 mx-auto max-w-7xl">
          <Hero>
            <HeroTitle className="animate-fade-in [--animation-delay:100ms] opacity-0 translaye-y-[-10px]">
              Devlink : Unifying Developers
              <br /> Around the world
            </HeroTitle>
            <HeroSubtitle className="mt-4 opacity-0 translaye-y-[-10px] font-medium tracking-tight animate-fade-in [--animation-delay:300ms] text-primary-text">
              Unleash the Power of Community.
              <br /> Connect
              <span className="px-1 ">•</span>Collaborate
              <span className="px-1">•</span>Code
              <br className="hidden md:block" />
            </HeroSubtitle>

            <Button
              className="animate-fade-in [--animation-delay:500ms] opacity-0 translaye-y-[-10px]"
              href="/feed"
              variant="primary"
              size="large"
            >
              <span className="text-sm font-medium tracking-tight">
                Get Started{" "}
              </span>

              <ChevronRight className="w-4 h-4 font-medium" />
            </Button>
            <HeroImage />
          </Hero>
          {/* <div className="mt-24">
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <Image
                  src="/mobile.png"
                  width={272}
                  height={572}
                  className="hidden dark:block w-[272px] h-[572px]"
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default page;
