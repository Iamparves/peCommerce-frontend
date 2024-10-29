import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    title: "Best Selling",
    description: "Step Into New Worlds",
    btnTitle: "Shop Now",
    link: "/shop",
    bannerImg:
      "https://www.vrs.org.uk/wp-content/uploads/images/focus-plus-hero-desktop-banner.jpg",
  },
  {
    title: "New Arrivals",
    description: "Discover The Latest",
    btnTitle: "Shop Now",
    link: "/shop",
    bannerImg:
      "https://i.pinimg.com/originals/d6/4f/c0/d64fc0fc033ae9865d24eee0d1d81dfa.jpg",
  },
  {
    title: "Featured",
    description: "Explore The Best",
    btnTitle: "Shop Now",
    link: "/featured",
    bannerImg:
      "https://global.beyerdynamic.com/media/catalog/category/beyerdynamic-Katalogbanner-Amiron-Copper-ohne-bubble.jpg",
  },
];

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true,
          renderBullet: function (_, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        className="home-banner-slider z-10 h-full w-full"
      >
        {slides.map((slide, index: number) => (
          <SwiperSlide className="h-full !w-full" key={index}>
            <div
              style={{
                backgroundImage: `url("${slide.bannerImg}")`,
                backgroundRepeat: "no-repeat",
              }}
              className="h-full w-full bg-cover bg-center bg-no-repeat"
            >
              <div className="flex h-full w-full flex-col items-start justify-center bg-gradient-to-r from-black/50 to-black/10 px-5 py-[60px] sm:py-[75px] md:px-10 md:py-[88px] lg:px-16 lg:py-16">
                <h4 className="mb-3 text-sm font-semibold uppercase text-white md:mb-5 md:text-base lg:text-lg">
                  {slide.title}
                </h4>
                <h2 className="mb-6 max-w-[160px] text-2xl font-semibold leading-tight text-white sm:max-w-none sm:text-3xl md:mb-8 md:text-4xl lg:text-[44px]">
                  {slide.description}
                </h2>
                <Link
                  to={slide.link}
                  className="block rounded-lg bg-white px-3 py-3 text-sm font-semibold uppercase duration-300 hover:bg-[#D2EF9A] md:px-7 md:py-3.5"
                >
                  {slide.btnTitle}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
