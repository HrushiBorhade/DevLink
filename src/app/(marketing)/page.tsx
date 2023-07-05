import { Button } from "@/components/MarketingPage/Button";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/MarketingPage/Hero";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import HeroImage from "@/components/MarketingPage/HeroImage";
import Tech from "@/components/MarketingPage/Tech";
// import { EnjoyIssueTracking } from "@/components/MarketingPage/sections/ShowCase";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="">
      <main>
        <div className="container pt-32 mx-auto max-w-7xl">
          <Hero>
            <HeroTitle className="animate-fade-in [--animation-delay:100ms] opacity-0 translaye-y-[-10px] relative">
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
              <span className="text-[17px] font-medium tracking-tight flex items-center gap-1 ">
                Join Now <ChevronRight className="w-4 h-4 font-semibold" />
              </span>
            </Button>
            <HeroImage />
          </Hero>
          <Tech />
        </div>
      </main>
      {/* <EnjoyIssueTracking /> */}
    </div>
  );
};

export default page;
