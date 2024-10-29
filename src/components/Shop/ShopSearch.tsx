import { Search } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "../ui/input";

const ShopSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [searchInp, setSearchInp] = useState(search || "");

  const handleSearch = () => {
    setSearchParams((prev) => {
      if (searchInp === "") {
        prev.delete("search");
      } else {
        prev.set("search", searchInp);
      }

      return prev;
    });
  };

  return (
    <div className="border-b pb-10">
      <h3 className="mb-4 text-xl font-semibold">Search</h3>
      <div className="grid grid-cols-[1fr_auto_auto] items-center border">
        <Input
          value={searchInp}
          onChange={(e) => setSearchInp(e.target.value)}
          placeholder="Search here..."
          className="rounded-none border-0 text-[15px]"
        />
        <div className="h-[calc(100%-16px)] w-[1px] bg-gray-300"></div>
        <button
          onClick={handleSearch}
          className="h-full px-3 duration-200 hover:text-[#FF2F2F]"
        >
          <Search className="size-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default ShopSearch;
