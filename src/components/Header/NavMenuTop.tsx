import useLocalStore from "@/store";
import { Heart, Menu, UserRound } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavCart from "./Actions/NavCart";
import NavbarSearch from "./NavbarSearch";

const NavMenuTop = () => {
  const navigate = useNavigate();
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
          <div className="">
            <button className="block text-white">
              <UserRound className="size-6" />
            </button>
          </div>
          <div className="">
            <button
              onClick={() => navigate("wishlist")}
              className="block text-white"
            >
              <Heart className="size-6" />
            </button>
          </div>
          <NavCart />
        </div>
      </div>
    </div>
  );
};

export default NavMenuTop;
