"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SheetComponent } from "./SheetComponents";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const path = usePathname().split("/")[1];
  const NavLinks: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Members", href: "/members" },
    { name: "Gallery", href: "/gallery" },
    { name: "Projects", href: "/projects" },
    { name: "History", href: "/history" },
  ];

  return (
    <header
      className={cn(
        "text-gray-400 body-font container mx-auto flex flex-wrap p-5 max-sm:p-5 max-sm:px-7 items-center justify-between sticky top-0 z-50 backdrop-blur-sm max-sm:justify-between w-dvw",
        path === "" && "fixed",
        path === "projects" && "fixed"
      )}
    >
      <Link
        href="/"
        className="flex title-font font-medium items-center text-gray-900"
      >
        <Image src="/logo.png" width={40} height={40} alt={"image"} />
        <span className="ml-3 font-extrabold text-2xl bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent"> CleverBook</span>
      </Link>
      <nav className="flex flex-wrap items-center text-base justify-between max-md:hidden">
        {NavLinks?.map((nav, index) => {
          return (
            <Link
              key={index}
              className={cn(
                `mx-5 dark:hover:text-white hover:text-indigo-400 no-underline ${
                  path === nav.href.split("/")[1] &&
                  "dark:text-white text-indigo-400 "
                }`,
                ""
              )}
              href={nav.href}
            >
              {nav.name}
            </Link>
          );
        })}
      </nav>
      <span className="max-md:hidden">
        <ThemeToggle />
      </span>
      <SheetComponent />
    </header>
  );
};
