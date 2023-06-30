import { Button } from "@/components/MarketingPage/Button";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/MarketingPage/Hero";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import HeroImage from "@/components/MarketingPage/HeroImage";
import Features from "@/components/MarketingPage/Features";

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
              <span className="text-sm font-medium tracking-tight">
                Get Started{" "}
              </span>

              <ChevronRight className="w-4 h-4 font-medium" />
            </Button>
            <HeroImage />
          </Hero>
          <Features />
        </div>
      </main>
    </div>
  );
};

export default page;
