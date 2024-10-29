import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const disCountedPrice = (
    (product.price * (100 - product.discount)) /
    100
  ).toFixed(2);
  const fullStar = Math.floor(product.rating);
  const halfStar = Math.ceil(product.rating - fullStar);
  const emptyStar = 5 - fullStar - halfStar;

  return (
    <div className="group relative h-full w-full">
      <Link
        to={`/shop/${product._id}`}
        className="group block overflow-hidden rounded-md border bg-white"
      >
        <div className="relative aspect-square w-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="block h-full w-full object-cover"
          />
          {product.images.length > 1 && (
            <img
              src={product.images[1]}
              alt={product.name}
              className="absolute left-0 top-0 h-full w-full object-cover opacity-0 duration-300 group-hover:opacity-100"
            />
          )}
          <div className="absolute left-0 top-0 z-[99] flex flex-col gap-1.5 p-5 text-center text-xs font-semibold uppercase tracking-wider text-white">
            {(product.discount > 0 || product.isNew) && (
              <div className="w-16 rounded-[2px] bg-[#84B77C] py-2 tracking-widest saturate-[1.3]">
                {product.discount > 0 ? `${product.discount}%` : "New"}
              </div>
            )}
            {product.onSale && (
              <div className="w-16 rounded-[2px] bg-[#FE4536] py-2">Sale</div>
            )}
          </div>
        </div>
        <div className="p-5 lg:p-6">
          <p className="mb-2.5 text-xs uppercase text-[#878787]">
            {product.category}
          </p>
          <h3 className="mb-4 text-lg font-semibold leading-tight">
            {product.name}
          </h3>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex gap-1 text-lg text-[#FF9806]">
              {[...Array(fullStar)].map((_, index) => (
                <FaStar key={index} />
              ))}
              {halfStar === 1 && <FaStarHalfAlt />}
              {[...Array(emptyStar)].map((_, index) => (
                <FaStar key={index} className="text-gray-300" />
              ))}
            </div>
            <span className="block text-sm text-[#878787]">
              ({product.reviewCount} Reviews)
            </span>
          </div>
          <h4 className="flex items-center gap-3 text-[17px] font-semibold text-[#E53E3E]">
            {product.discount > 0 && (
              <span className="block text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
            <span className="block">
              {product.discount > 0
                ? `$${disCountedPrice}`
                : `$${product.price.toFixed(2)}`}
            </span>
          </h4>
        </div>
      </Link>
      <div className="absolute right-5 top-5 flex flex-col gap-2.5 duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 lg:invisible lg:translate-x-3 lg:opacity-0">
        <button className="flex size-10 items-center justify-center rounded-full bg-white text-[#1f1f1f] shadow-[0_0_2px_1px_rgba(0,0,0,0.15)] duration-300 hover:bg-[#E53E3E] hover:text-white">
          <ShoppingCart className="size-[18px]" />
        </button>
        <button className="flex size-10 items-center justify-center rounded-full bg-white text-[#1f1f1f] shadow-[0_0_2px_1px_rgba(0,0,0,0.15)] duration-300 hover:bg-[#E53E3E] hover:text-white">
          <Heart className="size-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
