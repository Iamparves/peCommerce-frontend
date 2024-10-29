import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import BlogCard from "../Blog/BlogCard";

const blogs = [
  {
    title: "Top 10 Must-Have Gadgets for 2024",
    slug: "top-10-must-have-gadgets-2024",
    description:
      "Discover the latest gadgets that will revolutionize your tech game this year. From smartwatches to home automation, these are the essentials you need.",
    thumbnail: "/images/blog/blog-1.jpg",
    publishedDate: new Date("2024-10-01T00:00:00Z"),
    author: "John Doe",
  },
  {
    title: "How to Style Your Wardrobe for Every Season",
    slug: "style-your-wardrobe-for-every-season",
    description:
      "A complete guide to building a versatile wardrobe that suits every season. Learn the best fashion tips to stay trendy all year long.",
    thumbnail: "/images/blog/blog-2.jpg",
    publishedDate: new Date("2024-09-15T00:00:00Z"),
    author: "Jane Smith",
  },
  {
    title: "Home Décor Trends: Transform Your Space in 2024",
    slug: "home-decor-trends-2024",
    description:
      "Explore the top home décor trends of 2024 that will inspire you to refresh your living space, from minimalism to vibrant color palettes.",
    thumbnail: "/images/blog/blog-3.jpg",
    publishedDate: new Date("2024-08-20T00:00:00Z"),
    author: "Emily Brown",
  },
];

const RecentBlog = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="relative mb-10 flex flex-wrap items-end justify-between gap-2 border-b border-gray-200 pb-3">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Recent Blogs
          </h2>
          <Link
            to="/categories"
            className="flex items-center gap-2 font-medium duration-300 hover:text-[#FF2F2F]"
          >
            View All <ChevronRight className="size-[18px]" strokeWidth={1.8} />
          </Link>
          <div className="absolute bottom-0 left-0 h-[1px] w-1/4 min-w-[120px] max-w-[200px] bg-[#FCBE00]"></div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
