import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const cart = [
  {
    id: 1,
    name: "Realinn Under Sink Organizer and Storage for Kitchen",
    price: 30,
    stock: 10,
    image: "/images/top-rated/product-3.jpg",
  },
  {
    id: 3,
    name: "Sony Noise Canceling Wireless Headphone",
    price: 65.14,
    stock: 15,
    image: "/images/top-rated/product-7.jpg",
  },
  {
    id: 4,
    name: "White Ceramic Vases - 3 Small Ribbed Vase for Flowers",
    price: 25,
    stock: 0,
    image: "/images/top-rated/product-1.jpg",
  },
];

const NavCart = () => {
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <div>
      <button onClick={handleOpenCart} className="relative block text-white">
        <ShoppingCart className="size-6" />
        <span className="absolute -right-[7px] -top-1.5 flex size-5 items-center justify-center rounded-full bg-[#FF2F2F] text-[11px] font-semibold text-white">
          02
        </span>
      </button>
      <Sheet open={openCart} onOpenChange={setOpenCart}>
        <SheetContent className="max-w-[320px] p-0 sm:max-w-[360px]">
          <SheetHeader>
            <SheetTitle className="grid grid-cols-[1fr_auto] items-center gap-5 border-b px-3.5 pb-2 pt-5 sm:px-5">
              <span className="block text-left text-lg font-semibold sm:text-xl">
                Shopping Cart
              </span>
              <button
                onClick={handleCloseCart}
                className="size-5 text-[#333] duration-300 hover:text-red-500"
              >
                <X className="size-full" />
              </button>
            </SheetTitle>
            <SheetDescription className="hidden"></SheetDescription>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-58px)] w-full px-3.5 pb-5 pt-3 sm:px-5">
            <div className="flex flex-col gap-5 pb-4 pt-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[auto_1fr_auto] gap-2.5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-[4/5] min-h-full w-16 object-cover"
                  />
                  <div className="text-left">
                    <h4 className="mb-2 text-[15px] font-medium leading-tight text-[#000]">
                      {item.name}
                    </h4>
                    <p className="flex items-center gap-1 text-[15px] font-medium text-[#333]">
                      1 <X className="size-3" /> ${item.price}
                    </p>
                  </div>
                  <button className="size-4">
                    <Trash2 className="size-full" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex w-full items-center justify-between py-3">
              <h4 className="text-lg font-semibold text-[#1f1f1f]">
                Subtotal:
              </h4>
              <p className="font-medium text-[#333]">$95.14</p>
            </div>
            <div className="space-y-2">
              <Link
                to="/cart"
                onClick={handleCloseCart}
                className="block bg-[#1f1f1f] py-3.5 text-center font-semibold text-white duration-300 hover:bg-[#FF2F2F] sm:py-[15px]"
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                onClick={handleCloseCart}
                className="block bg-[#1f1f1f] py-3.5 text-center font-semibold text-white duration-300 hover:bg-[#FF2F2F] sm:py-[15px]"
              >
                Checkout
              </Link>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavCart;
