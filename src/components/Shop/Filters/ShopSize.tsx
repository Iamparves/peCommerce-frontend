import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const sizes = ["S", "M", "L", "XL", "XXL"];

const ShopSize = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const size = searchParams.get("size");
  const [sizeChecked, setSizeChecked] = useState(size ? size.split(",") : []);

  const handleSizeChange = () => {
    setSearchParams((prev) => {
      if (sizeChecked.length === 0) {
        prev.delete("size");
      } else {
        prev.set("size", sizeChecked.join(","));
      }

      return prev;
    });
  };

  useEffect(() => {
    handleSizeChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeChecked]);

  return (
    <div className="border-b py-10">
      <h3 className="mb-4 text-xl font-semibold">Size</h3>
      <div className="flex flex-col gap-3">
        {sizes.map((size) => (
          <div
            key={size}
            className="grid cursor-pointer grid-cols-[auto_1fr] items-center text-[15px] duration-300 hover:text-[#FF2F2F]"
          >
            <Checkbox
              checked={sizeChecked.includes(size)}
              onClick={() => {
                if (sizeChecked.includes(size)) {
                  setSizeChecked((prev) => prev.filter((s) => s !== size));
                } else {
                  setSizeChecked((prev) => [...prev, size]);
                }
              }}
              id={size}
              className="size-4 border-gray-300"
            />
            <label className="cursor-pointer pl-2" htmlFor={size}>
              {size}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSize;
