import { cn } from "@/lib/utils";
import useLocalStore from "@/store";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import NavMenuList from "./NavMenuList";

const NavMainMenu = () => {
  const isMenuOpen = useLocalStore((state) => state.isMenuOpen);
  const setIsMenuOpen = useLocalStore((state) => state.setIsMenuOpen);

  return (
    <>
      <div className="hidden border-b border-gray-200 bg-white py-2 lg:block">
        <div className="container flex items-center justify-between">
          <div className="grid grid-cols-[auto_1fr] gap-10">
            <Link
              to="/categories"
              className="flex w-[240px] items-center gap-2 py-1"
            >
              <Menu className="size-5" />
              <span className="font-semibold">Categories</span>
              <ChevronDown className="ml-auto size-5" />
            </Link>
            <NavMenuList />
          </div>
          <div className="">
            <p className="text-sm">
              Hotline: <span className="font-semibold">+01 1234 888</span>
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsMenuOpen(false);
        }}
        className={cn(
          "fixed left-0 top-0 z-[999] h-screen w-full bg-black/50 duration-200 lg:hidden",
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ScrollArea
          className={cn(
            "h-full w-[calc(100%-50px)] min-w-[280px] max-w-[300px] bg-white px-5 py-5 duration-300 sm:px-6",
            isMenuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="mb-4 flex items-center justify-between lg:hidden">
            <h2 className="text-[22px] font-semibold">Menu</h2>
            <button
              className="text-black duration-200 hover:text-[#FF2F2F]"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="size-6" />
            </button>
          </div>
          <div className="mb-5 grid grid-cols-[1fr_auto_auto] items-center border">
            <Input
              placeholder="Search product..."
              className="rounded-none border-0 text-[15px]"
            />
            <div className="h-[calc(100%-16px)] w-[1px] bg-gray-300"></div>
            <button className="h-full px-3 duration-200 hover:text-[#FF2F2F]">
              <Search className="size-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="mb-5 min-h-[calc(100vh-220px)]">
            <NavMenuList />
          </div>
          <div className="border-t pt-3">
            <p className="text-sm">
              Hotline: <span className="font-semibold">+01 1234 888</span>
            </p>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default NavMainMenu;
