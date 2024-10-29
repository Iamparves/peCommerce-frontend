import { cn } from "@/lib/utils";
import { useState } from "react";
import ProductAdditionalInformation from "./ProductAdditionalInformation";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";

const tabs = [
  {
    name: "description",
    title: "Description",
  },
  {
    name: "additional-information",
    title: "Additional Information",
  },
  {
    name: "reviews",
    title: "Reviews",
  },
];

const ProductdetailsContent = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="bg-white pb-20 pt-2">
      <div className="container">
        <div className="flex flex-wrap gap-x-12 gap-y-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={cn(
                "group relative block pb-3 text-lg font-medium text-[#b6b6b6] duration-300 hover:text-[#222] sm:text-xl",
                activeTab === tab.name && "text-[#222]",
              )}
            >
              {tab.title}
              <div
                className={cn(
                  "absolute bottom-[-1px] left-0 h-0.5 w-0 bg-[#FCBE00] duration-300 group-hover:w-full",
                  activeTab === tab.name && "w-full",
                )}
              ></div>
            </button>
          ))}
        </div>
        <div className="pt-6">
          {activeTab === "description" && <ProductDescription />}
          {activeTab === "additional-information" && (
            <ProductAdditionalInformation />
          )}
          {activeTab === "reviews" && <ProductReviews />}
        </div>
      </div>
    </section>
  );
};

export default ProductdetailsContent;
