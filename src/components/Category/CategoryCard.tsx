import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: any;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={category.path}
      className="group relative mx-auto mb-20 flex max-w-[220px] flex-col items-center"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-full">
        <img
          src={category.featuredImage}
          alt={category.title}
          className="block h-full w-full rounded-full object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full scale-0 rounded-full bg-[#FF4135]/50 duration-300 group-hover:scale-100"></div>
      </div>
      <h3 className="absolute bottom-0 left-0 w-full translate-y-full pt-6 text-center text-lg font-semibold leading-tight">
        {category.title}{" "}
        <span className="inline-block pl-0.5 text-base font-normal text-gray-600">
          ({category.productCount})
        </span>
      </h3>
    </Link>
  );
};

export default CategoryCard;
