import { cn } from "@/lib/utils";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";

interface CartItemProps {
  product: any;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const [cartQuantity, setCartQuantity] = useState(1);

  return (
    <div
      key={product.id}
      className={cn(
        "flex flex-col items-center gap-3 border-b p-5 last:border-b-0 lg:grid lg:grid-cols-[auto_1fr_auto_auto_auto_auto] lg:gap-10",
      )}
    >
      <img
        src={product.image}
        alt={product.name}
        className="aspect-[1/1.3] w-[100px] object-cover"
      />
      <h4 className="mx-auto max-w-[280px] text-center font-medium">
        {product.name}
      </h4>
      <p className="w-[120px] text-center font-medium">${product.price}</p>
      <div className="flex w-32 items-center border">
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
      <p className="w-32 text-center font-medium">
        ${(product.price * cartQuantity).toFixed(2)}
      </p>
      <div className="w-20">
        <button className="mx-auto flex size-9 items-center justify-center rounded-full border duration-300 hover:bg-black hover:text-white">
          <X className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
