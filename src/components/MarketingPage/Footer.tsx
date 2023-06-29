import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-[#ffffff14] py-14 text-sm">
    <div className="container flex flex-col justify-between mx-auto max-w-7xl md:flex-row md:gap-4">
      <div>
        <div className="flex flex-row justify-between h-full md:flex-col">
          <div className="flex items-center gap-2 text-zinc-500">
            <Image src="/logo.png" width={24} height={24} alt="logo" priority />
            <span className="font-medium">Devlink</span>
          </div>
          <div className="flex gap-8 mt-auto text-zinc-500">
            <Twitter className="w-4 h-4 hover:text-blue-600" />
            <Github className="w-4 h-4 hover:text-emerald-800" />
            <Linkedin className="w-4 h-4 hover:text-blue-700" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className=" min-w-[50%] mt-10 md:mt-0 md:min-w-[12rem]"
          >
            <h3 className="mb-4 font-medium text-zinc-200">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="block mb-4 transition-colors text-zinc-500 hover:text-zinc-300"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
);
