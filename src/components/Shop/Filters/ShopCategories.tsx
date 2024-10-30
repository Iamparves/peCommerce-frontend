import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router-dom";

const categories = [
  {
    name: "All",
    slug: "all",
  },
  {
    name: "T-Shirt",
    slug: "t-shirt",
  },
  {
    name: "Dress",
    slug: "dress",
  },
  {
    name: "Top",
    slug: "top",
  },
  {
    name: "Swimwear",
    slug: "swimwear",
  },
  {
    name: "Shirt",
    slug: "shirt",
  },
  {
    name: "Accessories",
    slug: "accessories",
  },
];

const ShopCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const handleCategory = (category: string) => {
    setSearchParams((prev) => {
      if (category === "all") {
        prev.delete("category");
      } else {
        prev.set("category", category);
      }

      return prev;
    });
  };

  return (
    <div className="border-b py-10">
      <h3 className="mb-4 text-xl font-semibold">Categories</h3>
      <div className="flex flex-col items-start gap-2.5 text-[15px] text-[#696c70]">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            className={cn(
              "duration-200 hover:text-[#FF2F2F]",
              category === cat.slug ? "text-[#FF2F2F]" : "",
              !category && cat.slug === "all" ? "text-[#FF2F2F]" : "",
            )}
            onClick={() => handleCategory(cat.slug)}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
