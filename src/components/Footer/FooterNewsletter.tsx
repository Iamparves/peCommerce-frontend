import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const FooterNewsletter = () => {
  return (
    <div className="w-full max-w-sm text-[#1f1f1f] md:max-w-[260px] lg:max-w-[300px]">
      <h3 className="mb-4 text-sm font-semibold uppercase">Newsletter</h3>
      <p className="text-[15px]">
        Sign up for our newsletter and get 10% off your first purchase
      </p>
      <div className="relative my-5">
        <Input
          className="h-[50px] rounded-xl pl-4 pr-14 transition-colors duration-200 placeholder:text-gray-400 focus:border-black"
          placeholder="Enter your email"
        />
        <Button
          className="absolute right-1 top-1/2 size-[42px] -translate-y-1/2 rounded-[10px] duration-200 hover:bg-[#D2EF9A] hover:text-black"
          size={"icon"}
          type="button"
        >
          <ArrowRight className="!size-6" />
        </Button>
      </div>
    </div>
  );
};

export default FooterNewsletter;
