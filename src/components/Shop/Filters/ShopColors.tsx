import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const colors = ["Green", "Cream", "Blue", "Black"];

const ShopColors = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const color = searchParams.get("color");
  const [colorChecked, setColorChecked] = useState(
    color ? color.split(",") : [],
  );

  const handleColorChange = () => {
    setSearchParams((prev) => {
      if (colorChecked.length === 0) {
        prev.delete("color");
      } else {
        prev.set("color", colorChecked.join(","));
      }

      return prev;
    });
  };

  useEffect(() => {
    handleColorChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorChecked]);

  return (
    <div className="py-10 pb-0">
      <h3 className="mb-4 text-xl font-semibold">Color</h3>
      <div className="flex flex-col gap-3">
        {colors.map((size) => (
          <div
            key={size}
            className="grid cursor-pointer grid-cols-[auto_1fr] items-center text-[15px] duration-300 hover:text-[#FF2F2F]"
          >
            <Checkbox
              checked={colorChecked.includes(size)}
              onClick={() => {
                if (colorChecked.includes(size)) {
                  setColorChecked((prev) => prev.filter((s) => s !== size));
                } else {
                  setColorChecked((prev) => [...prev, size]);
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

export default ShopColors;
