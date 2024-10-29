import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../Category/CategoryCard";

const categories = [
  {
    title: "Electronics & Gadgets",
    path: "/categories/electronics",
    featuredImage: "/images/categories/cat-1.jpg",
    productCount: 20,
  },
  {
    title: "Fashion & Apparel",
    path: "/categories/fashion",
    featuredImage: "/images/categories/cat-2.jpg",
    productCount: 30,
  },
  {
    title: "Home & Kitchen",
    path: "/categories/home-kitchen",
    featuredImage: "/images/categories/cat-3.jpg",
    productCount: 15,
  },
  {
    title: "Health & Beauty",
    path: "/categories/health-beauty",
    featuredImage: "/images/categories/cat-4.jpg",
    productCount: 10,
  },
  {
    title: "Sports & Outdoors",
    path: "/categories/sports-outdoors",
    featuredImage: "/images/categories/cat-5.jpg",
    productCount: 25,
  },
  {
    title: "Toys & Hobbies",
    path: "/categories/toys-hobbies",
    featuredImage: "/images/categories/cat-6.jpg",
    productCount: 22,
  },
  {
    title: "Grocery & Essentials",
    path: "/categories/grocery",
    featuredImage: "/images/categories/cat-7.jpg",
    productCount: 18,
  },
];

const TopCategories = () => {
  return (
    <section className="bg-white pb-20 lg:pb-24">
      <div className="container">
        <div className="relative mb-10 flex flex-wrap items-end justify-between gap-2 border-b border-gray-200 pb-3">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Top Categories
          </h2>
          <Link
            to="/categories"
            className="flex items-center gap-2 font-medium duration-300 hover:text-[#FF2F2F]"
          >
            View All <ChevronRight className="size-[18px]" strokeWidth={1.8} />
          </Link>
          <div className="absolute bottom-0 left-0 h-[1px] w-1/4 min-w-[120px] max-w-[200px] bg-[#FCBE00]"></div>
        </div>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={2}
            spaceBetween={24}
            loop={true}
            speed={1000}
            autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
            className="w-full"
            navigation={{
              nextEl: ".category-button-next",
              prevEl: ".category-button-prev",
            }}
            breakpoints={{
              600: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
          >
            {categories.map((category, index: number) => (
              <SwiperSlide className="" key={index}>
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            <button className="category-button-prev absolute left-0 top-[calc(50%-40px)] z-[9] flex size-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f9f9f9] duration-300 hover:bg-[#263587] hover:text-white">
              <ChevronLeft className="size-7" strokeWidth={1.5} />
            </button>
            <button className="category-button-next absolute right-0 top-[calc(50%-40px)] z-[9] flex size-10 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border bg-[#f9f9f9] duration-300 hover:bg-[#263587] hover:text-white">
              <ChevronRight className="size-7" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
