import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const brands = [
  {
    name: "Adidas",
    logo: "/images/brands/adidas.png",
  },
  {
    name: "Apex",
    logo: "/images/brands/apex.png",
  },
  {
    name: "Casio",
    logo: "/images/brands/casio.png",
  },
  {
    name: "Easy",
    logo: "/images/brands/easy.png",
  },
  {
    name: "Lotto",
    logo: "/images/brands/lotto.png",
  },
  {
    name: "Louis Vuitton",
    logo: "/images/brands/louis-vuitton.png",
  },
  {
    name: "Nike",
    logo: "/images/brands/nike.png",
  },
  {
    name: "Realme",
    logo: "/images/brands/realme.png",
  },
  {
    name: "Sailor",
    logo: "/images/brands/sailor.png",
  },
  {
    name: "Samsung",
    logo: "/images/brands/samsung.png",
  },
  {
    name: "Vivo",
    logo: "/images/brands/vivo.png",
  },
  {
    name: "Walton",
    logo: "/images/brands/walton.png",
  },
  {
    name: "Zara",
    logo: "/images/brands/zara.png",
  },
];

const ShopByBrand = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="relative mb-10 flex flex-wrap items-end justify-between gap-2 border-b border-gray-200 pb-3">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Shop by Brands
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
            spaceBetween={12}
            loop={true}
            speed={400}
            autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
            className="w-full"
            navigation={{
              nextEl: ".brand-button-next",
              prevEl: ".brand-button-prev",
            }}
            breakpoints={{
              580: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1220: {
                slidesPerView: 6,
              },
              1280: {
                slidesPerView: 7,
              },
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={`/shop?brands=${brand.name.toLowerCase()}`}
                  className="mx-auto block aspect-[3/2] w-full max-w-[240px] overflow-hidden rounded-md border bg-white p-6"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-full object-contain"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            <button className="brand-button-prev absolute left-0 top-1/2 z-[9] flex size-9 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border bg-[#f9f9f9] duration-300 hover:bg-[#263587] hover:text-white">
              <ChevronLeft className="size-6" strokeWidth={1.5} />
            </button>
            <button className="brand-button-next absolute right-0 top-1/2 z-[9] flex size-9 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border bg-[#f9f9f9] duration-300 hover:bg-[#263587] hover:text-white">
              <ChevronRight className="size-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByBrand;
