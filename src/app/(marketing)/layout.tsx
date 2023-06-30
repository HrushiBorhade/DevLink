import { Footer } from "@/components/MarketingPage/Footer";
import Header from "@/components/MarketingPage/Header";
import "@/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#030711]">
      <Header />
      <main className="pt-12 bg-page-gradient ">{children}</main>
      <Footer />
    </div>
  );
}
