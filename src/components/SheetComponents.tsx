import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { IconMenu } from "@tabler/icons-react";
  import { usePathname } from "next/navigation";
  import Link from "next/link";
  import { ThemeToggle } from "./ThemeToggle";
  
  export function SheetComponent() {
    const path = usePathname().split("/")[1];
    const NavLinks: { name: string; href: string }[] = [
      { name: "Home", href: "/" },
      { name: "Events", href: "/events" },
      { name: "Projects", href: "/projects" },
      { name: "Members", href: "/members" },
      { name: "Gallery", href: "/gallery" },
      { name: "History", href: "/history" },
    ];
    return (
      <Sheet>
        <SheetTrigger asChild className="cursor-pointer">
          <IconMenu className="md:hidden " />
        </SheetTrigger>
        <SheetContent className="p-0">
          <div className="flex flex-col w-full pt-14">
            {NavLinks?.map((nav, index) => {
              return (
                <Link href={nav.href} key={index}>
                  <SheetClose
                    className={`mx-5 hover:dark:text-white h-[40px] flex items-center px-5 hover:dark:bg-slate-800 hover:bg-slate-100 dark:bg-slate-950 hover:text-black rounded-md my-2 w-5/6 ${
                      path === nav.href.split("/")[1] &&
                      "drak:text-white dark:bg-slate-800/95 bg-slate-100"
                    }`}
                  >
                    {nav.name}
                  </SheetClose>
                </Link>
              );
            })}
            <div className=" flex justify-between flex-row mx-5 h-[40px] items-center px-5  dark:bg-slate-950  rounded-md my-2 w-5/6">
              <p>Choose theme</p>
              <ThemeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }
  