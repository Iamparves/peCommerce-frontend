import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import ShopCategories from "./Filters/ShopCategories";
import ShopColors from "./Filters/ShopColors";
import ShopPriceRange from "./Filters/ShopPriceRange";
import ShopSize from "./Filters/ShopSize";
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
          <ShopCategories />
          <ShopPriceRange />
          <ShopSize />
          <ShopColors />
        </div>
      </ScrollArea>
    </div>
  );
};

export default ShopSidebar;
