import { cn } from "@/lib/utils";
import { Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";

const ProductDetailsActions = () => {
  const [cartQuantity, setCartQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="flex flex-wrap gap-2.5">
      <div className="flex items-center border">
        <button
          onClick={() =>
            setCartQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))
          }
          className="flex h-[54px] w-[38px] items-center justify-center text-gray-500"
        >
          <Minus className="size-4" />
        </button>
        <span className="block min-w-12 text-center text-lg font-semibold">
          {cartQuantity}
        </span>
        <button
          onClick={() => setCartQuantity((prevQuantity) => prevQuantity + 1)}
          className="flex h-[54px] w-[38px] items-center justify-center text-gray-500"
        >
          <Plus className="size-4" />
        </button>
      </div>
      <div>
        <button className="block h-14 bg-[#1f1f1f] px-10 font-semibold text-white duration-300 hover:bg-[#FF4135]">
          Add to Cart
        </button>
      </div>
      <button
        onClick={() => setWishlisted((prevWishlisted) => !prevWishlisted)}
        className={cn(
          "flex h-14 w-14 items-center justify-center border text-[#1f1f1f]",
          wishlisted && "text-[#FF4135]",
        )}
      >
        <Heart
          fill={wishlisted ? "#FF4135" : "transparent"}
          className="size-6 duration-100"
        />
      </button>
    </div>
  );
};

export default ProductDetailsActions;
