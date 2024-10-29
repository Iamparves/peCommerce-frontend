import SectionTop from "@/components/shared/SectionTop";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
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

const Wishlist = () => {
  return (
    <main>
      <SectionTop title="Wishlist" />
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md border border-gray-200 p-3 sm:gap-4 sm:p-4"
              >
                <Link
                  to={`/shop/${product.id}`}
                  className="block aspect-[1/1.3] w-20 sm:w-24"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="block h-full w-full rounded-[5px] object-cover"
                  />
                </Link>

                <div className="flex flex-col items-start">
                  <p
                    className={cn(
                      "mb-2 rounded-full px-3 py-[5px] text-xs font-semibold",
                      product.stock > 0
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white",
                    )}
                  >
                    {product.stock > 0 ? "In Stock" : "Not In Stock"}
                  </p>
                  <Link
                    to={`/shop/${product.id}`}
                    className="mb-1 inline-block font-semibold text-[#2e3fa2]"
                  >
                    {product.name}
                  </Link>
                  <p className="mb-3 text-lg font-semibold text-[#848484]">
                    ${product.price}
                  </p>
                  <button
                    className={cn(
                      "block cursor-pointer rounded-md border border-[#2e3fa2] px-3 py-2.5 text-sm font-semibold text-[#2e3fa2] duration-200 hover:bg-[#2e3fa2] hover:text-white disabled:pointer-events-none disabled:border-gray-400 disabled:text-gray-400",
                    )}
                    disabled={product.stock === 0}
                  >
                    Add to Cart
                  </button>
                </div>
                <button className="size-8 rounded-sm bg-gray-100 p-1.5 text-[#2e3fa2] duration-200 hover:text-red-500">
                  <Trash2 className="size-full" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
