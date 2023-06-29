import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Home | Devlink",

  description: "Uniting the Developer World, One Line of Code at a Time.",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <div className="pt-12">
      {/* @ts-expect-error */}
      <Navbar />
      {authModal}
      <div className="container h-full pt-12 mx-auto max-w-7xl">{children}</div>
    </div>
  );
}
