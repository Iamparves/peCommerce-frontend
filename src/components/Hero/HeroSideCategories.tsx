import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Electronics & Gadgets",
    path: "/categories/electronics",
  },
  {
    title: "Fashion & Apparel",
    path: "/categories/fashion",
  },
  {
    title: "Home & Kitchen",
    path: "/categories/home-kitchen",
  },
  {
    title: "Health & Beauty",
    path: "/categories/health-beauty",
  },
  {
    title: "Sports & Outdoors",
    path: "/categories/sports-outdoors",
  },
  {
    title: "Toys & Hobbies",
    path: "/categories/toys-hobbies",
  },
  {
    title: "Accessories",
    path: "/categories/accessories",
  },
  {
    title: "Books & Stationery",
    path: "/categories/books-stationery",
  },
  {
    title: "Grocery & Essentials",
    path: "/categories/grocery",
  },
  {
    title: "View All",
    path: "/categories",
  },
];

const HeroSideCategories = () => {
  return (
    <div className="hidden w-[240px] rounded-xl border px-5 py-2 lg:block">
      {categories.map((category) => (
        <Link
          key={category.title}
          to={category.path}
          className="group relative flex justify-between border-b py-2.5 last:border-none"
        >
          {category.title}
          <ChevronRight strokeWidth={1} size={22} />
          <span className="absolute bottom-0 left-0 block h-[1px] w-0 bg-black duration-300 group-last:hidden group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
};

export default HeroSideCategories;
