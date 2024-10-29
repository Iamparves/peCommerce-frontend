import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface NavWishlistCardProps {
  product: any;
}

const NavWishlistCard: React.FC<NavWishlistCardProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-2.5">
      <Link className="block" to={`/shop/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[2/3] w-16 object-cover"
        />
      </Link>
      <div className="text-left">
        <Link
          to={`/shop/${product.id}`}
          className="mb-2 block text-[15px] font-medium leading-tight text-[#000]"
        >
          {product.name}
        </Link>
        <p className="mb-2 text-[15px] font-medium text-[#333]">
          ${product.price}
        </p>
        <button
          className={cn(
            "block border border-black px-2 py-1 text-[15px] font-medium duration-200 hover:bg-black hover:text-white",
            product.stock === 0 && "pointer-events-none opacity-50",
          )}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
      <button className="size-4">
        <Trash2 className="size-full" />
      </button>
    </div>
  );
};

export default NavWishlistCard;
