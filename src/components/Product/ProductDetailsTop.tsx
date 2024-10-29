import { cn } from "@/lib/utils";
import ProductDetailsGallery from "@/pages/ProductDetailsGallery";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductDetailsActions from "./ProductDetailsActions";

const sizes = ["S", "M", "L", "XL"];
const colors = ["#222222", "#4C86FA", "#F48182", "#B451F3", "#FF8429"];

const ProductDetailsTop = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(sizes[0]);
  const [selectedColor, setSelectedColor] = useState<string | null>(colors[0]);

  return (
    <section className="bg-white pb-20 pt-10">
      <div className="container">
        <div className="mx-auto max-w-[700px] lg:max-w-none">
          <div className="mb-10 flex items-center gap-2 text-sm font-medium text-[#878787]">
            <p>Home</p>
            <p>/</p>
            <Link to="/shop" className="text-blue-500 hover:underline">
              Shop
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-5 gap-y-12 lg:grid-cols-[6fr_5fr] xl:gap-x-20">
            <ProductDetailsGallery />
            <div className="">
              <h1 className="mb-3 text-2xl font-semibold text-[#0068C9]">
                White Short Sleeve T-shirt
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-[3px] text-[15px] text-[#FF8429]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300" />
                </div>
                <p className="text-sm text-[#878787]">|</p>
                <p className="text-[15px] text-[#878787]">3 Reviews</p>
                <p className="text-sm text-[#878787]">|</p>
                <button className="text-[15px] text-[#878787] duration-300 hover:text-[#FF8429]">
                  Add a Review
                </button>
              </div>
              <div className="mb-5 mt-3">
                <h3 className="text-2xl font-semibold">$49.99</h3>
              </div>
              <p className="mb-4 text-[#878787]">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. sed ut perspic
                atis unde omnis iste natus.
              </p>
              <p className="mb-3 text-[15px] font-medium">
                Availability:{" "}
                <span className="inline-block pl-1 text-blue-400">
                  10 in stock
                </span>
              </p>
              <div className="border-t pt-3">
                <div className="mb-5">
                  <h4 className="mb-1.5 text-lg font-medium">Size:</h4>
                  <div className="flex items-center gap-7">
                    {sizes.map((size, index) => (
                      <button
                        key={index}
                        className="flex items-center gap-2 pr-1 text-[15px] font-medium uppercase text-[#848484]"
                        onClick={() => setSelectedSize(size)}
                      >
                        <span
                          className={cn(
                            "block size-2 rounded-full border-2 duration-300",
                            selectedSize === size &&
                              "border-[#FF4135] bg-[#FF4135]",
                          )}
                        ></span>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-7">
                  <h4 className="mb-2.5 text-lg font-medium">Color:</h4>
                  <div className="flex items-center gap-5">
                    {colors.map((color, index) => (
                      <button
                        key={index}
                        className={cn(
                          "block size-4 rounded-full duration-300",
                          selectedColor === color && [
                            "scale-[1.35] shadow-[0_5px_10px_rgba(0,0,0,0.3)]",
                          ],
                        )}
                        style={{
                          backgroundColor: color,
                        }}
                        onClick={() => setSelectedColor(color)}
                      ></button>
                    ))}
                  </div>
                </div>
                <ProductDetailsActions />
                <p className="mb-2 mt-6 text-sm text-[#848484]">
                  <span className="inline-block w-[75px] font-medium text-black">
                    SKU:{" "}
                  </span>{" "}
                  DK1002
                </p>
                <div className="flex gap-3 text-sm text-[#878787]">
                  <p className="font-medium text-black">Category: </p>
                  <div className="flex flex-wrap gap-1">
                    <Link
                      to="/shop"
                      className="font-medium duration-300 hover:text-[#FF4135]"
                    >
                      Clothing,
                    </Link>
                    <Link
                      to="/shop"
                      className="font-medium duration-300 hover:text-[#FF4135]"
                    >
                      Men's Fashion,
                    </Link>
                    <Link
                      to="/shop"
                      className="font-medium duration-300 hover:text-[#FF4135]"
                    >
                      T-Shirt
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTop;
