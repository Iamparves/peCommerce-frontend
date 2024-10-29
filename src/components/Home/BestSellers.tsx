import { cn } from "@/lib/utils";
import { useState } from "react";
import BestSellerProductList from "./BestSellerProductList";

const filters = ["Weekly", "Monthly", "Yearly"];

const BestSellers = () => {
  const [activeFilter, setActiveFilter] = useState("Weekly");

  return (
    <section className="bg-white pb-20 pt-12 lg:pb-24">
      <div className="container">
        <div className="relative mb-10 flex flex-col flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3 sm:flex-row">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
            Best Sellers
          </h2>
          <div className="flex gap-1 rounded-full bg-[#F7F7F7] p-1 shadow-inner">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full px-4 py-2 text-[13px] font-semibold uppercase text-gray-600 shadow-none duration-300 sm:text-sm",
                  activeFilter === filter && "bg-white text-black shadow-sm",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 h-[1px] w-1/4 min-w-[120px] max-w-[200px] bg-[#FCBE00]"></div>
        </div>
        <BestSellerProductList />
      </div>
    </section>
  );
};

export default BestSellers;
