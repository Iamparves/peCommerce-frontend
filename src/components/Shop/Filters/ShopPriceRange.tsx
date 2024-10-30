import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ShopPriceRange = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sMin = searchParams.get("min");
  const sMax = searchParams.get("max");

  const [min, setMin] = useState<number | string>(sMin || "");
  const [max, setMax] = useState<number | string>(sMax || "");

  const handleFilter = () => {
    setSearchParams((prev) => {
      prev.set("min", min.toString());
      prev.set("max", max.toString());

      if (min === "") prev.delete("min");
      if (max === "") prev.delete("max");

      return prev;
    });
  };

  return (
    <div className="border-b py-10">
      <h3 className="mb-4 text-xl font-semibold">Price Range</h3>
      <div className="mb-3 grid grid-cols-2 gap-2.5">
        <Input
          type="number"
          placeholder="Min"
          className="rounded-none text-[15px]"
          min={0}
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Max"
          className="rounded-none text-[15px]"
          min={0}
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button
        onClick={handleFilter}
        className="block bg-black px-3 py-[5px] text-sm font-medium text-white duration-200 hover:bg-[#FF2F2F]"
      >
        Filter
      </button>
    </div>
  );
};

export default ShopPriceRange;
