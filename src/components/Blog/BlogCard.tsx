import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  blog: any;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="group mx-auto grid max-w-lg grid-cols-1 grid-rows-[auto_1fr] border bg-white duration-300 hover:border-transparent hover:shadow-[0_20px_30px_rgba(0,0,0,0.05)]">
      <Link
        to={`/blog/${blog.slug}`}
        className="relative block aspect-[3/2] max-h-[280px] w-full"
      >
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-[#FF2F2F]/30 opacity-0 duration-300 group-hover:opacity-100"></div>
      </Link>
      <div className="grid h-full grid-cols-1 grid-rows-[1fr_auto] p-5">
        <div>
          <div className="mb-2.5 flex items-center gap-2">
            <div className="h-0.5 w-4 bg-black"></div>
            <p className="text-[15px] font-medium">
              {format(blog.publishedDate, "MMM dd, yyyy")}
            </p>
          </div>
          <Link
            to={`/blog/${blog.slug}`}
            className="mb-1.5 block text-xl font-semibold leading-tight duration-300 hover:text-[#FF2F2F]"
          >
            {blog.title}
          </Link>
          <p className="mb-3 text-[#848484]">
            by <span className="font-medium text-[#263587]">{blog.author}</span>
          </p>
          <p className="text-[#848484]">{blog.description}</p>
        </div>
        <Link
          to={`/blog/${blog.slug}`}
          className="mt-4 flex items-center gap-1 font-semibold duration-300 hover:text-[#FF2F2F]"
        >
          Read More
          <ChevronRight className="size-5" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
