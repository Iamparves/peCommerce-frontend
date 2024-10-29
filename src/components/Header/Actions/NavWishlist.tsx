import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import WishlistCard from "@/components/Wishlist/WishlistCard";
import { Heart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const wishlist = [
  {
    id: 1,
    name: "Realinn Under Sink Organizer and Storage for Kitchen",
    price: 30,
    stock: 10,
    image: "/images/top-rated/product-3.jpg",
  },
  {
    id: 4,
    name: "White Ceramic Vases - 3 Small Ribbed Vase for Flowers",
    price: 25,
    stock: 0,
    image: "/images/top-rated/product-1.jpg",
  },
];

const NavWishlist = () => {
  const [openWishlist, setOpenWishlist] = useState(false);

  const handleOpenWishlist = () => {
    setOpenWishlist(true);
  };

  const handleCloseWishlist = () => {
    setOpenWishlist(false);
  };

  return (
    <div>
      <button onClick={handleOpenWishlist} className="block text-white">
        <Heart className="size-6" />
      </button>
      <Sheet open={openWishlist} onOpenChange={setOpenWishlist}>
        <SheetContent className="w-full max-w-[420px] p-0 sm:max-w-[420px] lg:max-w-[480px]">
          <SheetHeader>
            <SheetTitle className="grid grid-cols-[1fr_auto] items-center gap-5 border-b px-3.5 pb-2 pt-5 sm:px-5">
              <span className="block text-left text-lg font-semibold sm:text-xl">
                Wishlist
              </span>
              <button
                onClick={handleCloseWishlist}
                className="size-5 text-[#333] duration-300 hover:text-red-500"
              >
                <X className="size-full" />
              </button>
            </SheetTitle>
            <SheetDescription className="hidden"></SheetDescription>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-58px)] w-full px-3.5 py-5 sm:px-5">
            <div className="mb-5 space-y-3">
              {wishlist.map((product) => (
                <WishlistCard key={product.id} product={product} />
              ))}
            </div>
            <div>
              <Link
                to="/cart"
                onClick={handleCloseWishlist}
                className="block rounded-md bg-[#1f1f1f] py-3.5 text-center font-semibold text-white duration-300 hover:bg-[#FF2F2F] sm:py-[15px]"
              >
                View Wishlist
              </Link>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavWishlist;
