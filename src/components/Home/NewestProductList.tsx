import useProducts from "@/hooks/useProducts";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../Products/ProductCard";

const NewestProductList = () => {
  const products = useProducts();

  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        speed={650}
        autoplay={{
          delay: 2200,
          pauseOnMouseEnter: true,
        }}
        className="w-full"
        navigation={{
          nextEl: ".newestArrivals-button-next",
          prevEl: ".newestArrivals-button-prev",
        }}
        breakpoints={{
          400: {
            slidesPerView: 1.3,
          },
          500: {
            slidesPerView: 1.5,
          },
          600: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1220: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewestProductList;
