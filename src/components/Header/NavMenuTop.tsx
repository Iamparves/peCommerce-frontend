import useLocalStore from "@/store";
import { Menu } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavAccount from "./Actions/NavAccount";
import NavCart from "./Actions/NavCart";
import NavWishlist from "./Actions/NavWishlist";
import NavbarSearch from "./NavbarSearch";

const NavMenuTop = () => {
  const location = useLocation();
  const setIsMenuOpen = useLocalStore((state) => state.setIsMenuOpen);

  const pathname = location.pathname;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);

  return (
    <div className="bg-[#263587] py-3">
      <div className="container flex items-center justify-between gap-2.5 sm:gap-10">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white/80 duration-200 hover:text-white lg:hidden"
        >
          <Menu className="size-6" />
        </button>
        <Link
          to="/"
          className="mr-auto text-xl font-semibold text-white sm:mr-0 sm:text-2xl"
        >
          Posh Coder
        </Link>
        <NavbarSearch />
        <div className="flex items-center gap-2.5 sm:gap-5">
          <NavAccount />
          <NavWishlist />
          <NavCart />
        </div>
      </div>
    </div>
  );
};

export default NavMenuTop;
