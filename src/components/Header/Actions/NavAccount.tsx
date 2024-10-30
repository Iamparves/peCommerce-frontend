import { cn } from "@/lib/utils";
import useLocalStore from "@/store";
import { UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavAccount = () => {
  const location = useLocation();
  const isLoggedIn = useLocalStore((state) => state.isLoggedIn);
  const [openAccount, setOpenAccount] = useState(false);

  useEffect(() => {
    setOpenAccount(false);
  }, [location.pathname]);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setOpenAccount(!openAccount);
        }}
        className="block text-white"
      >
        <UserRound className="size-6" />
      </button>
      {openAccount && (
        <div
          onClick={() => {
            setOpenAccount(false);
          }}
          className="fixed left-0 top-0 z-[990] block h-screen w-full"
        ></div>
      )}
      <div
        className={cn(
          "absolute -right-[90px] top-[40px] z-[999] w-[280px] rounded-lg border bg-white p-5 shadow-[0_2px_20px_rgba(0,0,0,0.1)] duration-300 lg:p-8",
          openAccount
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-5 opacity-0",
        )}
      >
        {!isLoggedIn && (
          <div className="space-y-3">
            <Link
              className="block rounded-lg bg-black px-3 py-3 text-center text-sm font-semibold uppercase text-white duration-200 hover:bg-[#D2EF9A] hover:text-black"
              to="/login"
            >
              Login
            </Link>
            <p className="text-center text-[15px] text-[#878787]">
              Don't have an account?{" "}
              <Link
                className="text-[#000] duration-200 hover:text-[#FF2F2F]"
                to="/signup"
              >
                Sign up
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavAccount;
