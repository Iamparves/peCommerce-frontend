import { cn } from "@/lib/utils";
import { Heart, ShoppingCart } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
  {
    image:
      "https://htmldemo.net/norda/norda/assets/images/product/product-21.jpg",
    name: "Flower Flanner Check Jacket",
    rating: 5,
    reviewCount: 5,
    price: 19.98,
    discount: 0,
    category: "Clothing",
  },
  {
    image:
      "https://htmldemo.net/norda/norda/assets/images/product/product-22.jpg",
    name: "Scarf Fabric Wedgesv",
    rating: 5,
    reviewCount: 6,
    price: 23.65,
    discount: 25,
    category: "Shoes",
  },
  {
    image:
      "https://htmldemo.net/norda/norda/assets/images/product/product-23.jpg",
    name: "Hagestown School Sweaters",
    rating: 5,
    reviewCount: 4,
    price: 29.58,
    discount: 0,
    category: "Clothing",
  },
  {
    image:
      "https://htmldemo.net/norda/norda/assets/images/product/product-24.jpg",
    name: "Constrasting Sunglasses",
    rating: 3,
    reviewCount: 5,
    price: 43.65,
    discount: 40,
    category: "Accessories",
  },
  {
    image:
      "https://htmldemo.net/norda/norda/assets/images/product/product-25.jpg",
    name: "Fila Simple Sneaker in White Color",
    rating: 4,
    reviewCount: 6,
    price: 50.55,
    discount: 35,
    category: "Shoes",
  },
  {
    image:
      "https://htmldemo.net/norda/norda/assets/images/product/product-26.jpg",
    name: "Basic Simple Solid Color T-shirt",
    rating: 5,
    reviewCount: 2,
    price: 12.99,
    discount: 0,
    category: "Clothing",
  },
];

const BestSellerProductList = () => {
  return (
    <div className="grid grid-cols-1 gap-x-7 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => {
        const discountedPrice = (
          product.price -
          (product.price * product.discount) / 100
        ).toFixed(2);

        return (
          <div
            key={index}
            className="group relative grid grid-cols-[auto_1fr] items-center gap-5"
          >
            <Link to={`/shop/${index + 1}`} className="relative block">
              <img
                className="h-[160px] w-[130px] object-cover"
                src={product.image}
                alt={product.name}
              />
              {product.discount > 0 && (
                <span className="absolute right-0 top-0 block bg-[#FF2F2F] px-1.5 py-0.5 text-sm font-semibold text-white">
                  -{product.discount}%
                </span>
              )}
            </Link>
            <div className="">
              <p className="mb-2 text-xs font-medium uppercase text-[#999]">
                {product.category}
              </p>
              <Link
                to={`/shop/${index + 1}`}
                className="mb-3 block font-semibold leading-tight hover:underline"
              >
                {product.name}
              </Link>
              <div className="mb-6 flex items-center gap-[1px]">
                {[...Array(Math.floor(product.rating))].map((_, index) => (
                  <FaStar key={index} className="text-[15px] text-[#ff9806]" />
                ))}
                {[...Array(5 - Math.floor(product.rating))].map((_, index) => (
                  <FaStar key={index} className="text-[15px] text-[#ccc]" />
                ))}
                <span className="bold ml-1.5 text-sm text-[#999]">
                  ({product.reviewCount})
                </span>
              </div>
              <div className="z-[99] flex items-center gap-2">
                {product.discount > 0 && (
                  <p className="text-lg font-medium text-[#ff2f2f]">
                    {discountedPrice}
                  </p>
                )}
                <p
                  className={cn(
                    "text-lg font-medium text-[#ff2f2f]",
                    product.discount > 0 && "text-sm text-[#999] line-through",
                  )}
                >
                  {product.price}
                </p>
              </div>
              <div className="absolute bottom-1.5 right-1.5 flex items-center gap-4 duration-300 group-hover:scale-100 group-hover:opacity-100 md:scale-50 md:opacity-0">
                <button className="text-[#1f1f1f] duration-200 hover:text-[#db4444]">
                  <Heart strokeWidth={1.5} className="size-5" />
                </button>
                <button className="text-[#1f1f1f] duration-200 hover:text-[#db4444]">
                  <ShoppingCart strokeWidth={1.5} className="size-5" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BestSellerProductList;
