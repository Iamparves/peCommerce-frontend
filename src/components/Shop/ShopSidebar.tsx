import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import ShopSearch from "./ShopSearch";

interface ShopSidebarProps {
  openFilter: boolean;
  handleCloseFilter: () => void;
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({
  openFilter,
  handleCloseFilter,
}) => {
  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-[999] h-screen w-full bg-black/50 duration-300 lg:static lg:h-auto lg:w-[280px]",
        openFilter
          ? "opacity-100"
          : "pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100",
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleCloseFilter();
        }
      }}
    >
      <ScrollArea
        className={cn(
          "h-full w-full max-w-[320px] bg-white px-6 py-5 duration-200 lg:p-0",
          openFilter ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="w-full">
          <div className="mb-5 flex items-center justify-between lg:hidden">
            <h2 className="text-[22px] font-semibold">Filters</h2>
            <button
              className="text-black duration-200 hover:text-[#FF2F2F]"
              onClick={handleCloseFilter}
            >
              <X className="size-6" />
            </button>
          </div>
          <ShopSearch />
          <div className="border-b py-10">
            <h3 className="mb-4 text-xl font-semibold">Categories</h3>
            <div className="flex flex-col items-start gap-2.5 text-[15px] text-[#696c70]">
              <button className="duration-200 hover:text-[#FF2F2F]">
                T-Shirt
              </button>
              <button className="duration-200 hover:text-[#FF2F2F]">
                Dress
              </button>
              <button className="duration-200 hover:text-[#FF2F2F]">Top</button>
              <button className="duration-200 hover:text-[#FF2F2F]">
                Swimwear
              </button>
              <button className="duration-200 hover:text-[#FF2F2F]">
                Shirt
              </button>
              <button className="duration-200 hover:text-[#FF2F2F]">
                Accessories
              </button>
            </div>
          </div>
          <div className="border-b py-10">
            <h3 className="mb-4 text-xl font-semibold">Price Range</h3>
            <div className="mb-3 grid grid-cols-2 gap-2.5">
              <Input placeholder="Min" className="rounded-none text-[15px]" />
              <Input placeholder="Max" className="rounded-none text-[15px]" />
            </div>
            <button className="block bg-black px-3 py-[5px] text-sm font-medium text-white duration-200 hover:bg-[#FF2F2F]">
              Filter
            </button>
          </div>
          <div className="border-b py-10">
            <h3 className="mb-4 text-xl font-semibold">Size</h3>
            <div className="flex flex-col gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className="grid cursor-pointer grid-cols-[auto_1fr] items-center text-[15px] duration-300 hover:text-[#FF2F2F]"
                >
                  <Checkbox id={size} className="size-4 border-gray-300" />
                  <label className="cursor-pointer pl-2" htmlFor={size}>
                    {size}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="py-10 pb-0">
            <h3 className="mb-4 text-xl font-semibold">Color</h3>
            <div className="flex flex-col gap-3">
              {["Green", "Cream", "Blue", "Black"].map((size) => (
                <div
                  key={size}
                  className="grid cursor-pointer grid-cols-[auto_1fr] items-center text-[15px] duration-300 hover:text-[#FF2F2F]"
                >
                  <Checkbox id={size} className="size-4 border-gray-300" />
                  <label className="cursor-pointer pl-2" htmlFor={size}>
                    {size}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ShopSidebar;
