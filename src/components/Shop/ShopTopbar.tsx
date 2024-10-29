import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface ShopTopbarProps {
  handleOpenFilter: () => void;
}

const ShopTopbar: React.FC<ShopTopbarProps> = ({ handleOpenFilter }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  const handleSort = (value: string) => {
    setSearchParams((prev) => {
      prev.set("sort", value);
      return prev;
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
      <button
        onClick={handleOpenFilter}
        className="flex items-center gap-1.5 rounded-md px-2 py-1 duration-200 hover:text-[#FF2F2F] lg:hidden"
      >
        <Filter className="size-4" />
        <span className="text-[15px]">Filters</span>
      </button>
      <p className="mr-auto text-[15px] text-[#555]">
        Showing 1 - 20 of 30 results
      </p>
      <Select defaultValue={sort || ""} onValueChange={handleSort}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sorting" />
        </SelectTrigger>
        <SelectContent className="z-[99]">
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="discount">Best Discount</SelectItem>
          <SelectItem value="price-low">Price Low to High</SelectItem>
          <SelectItem value="price-high">Price High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ShopTopbar;
