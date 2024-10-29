import { cn } from "@/lib/utils";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const images = [
  "https://www.lerevecraze.com/wp-content/uploads/2024/09/cc835ab4-ff4d-460e-bfb7-f92b5d7d90b5.jpg",
  "https://www.lerevecraze.com/wp-content/uploads/2024/09/6f20781c-abd2-469f-945c-56aceca39c2d.jpg",
  "https://www.lerevecraze.com/wp-content/uploads/2024/09/a91ffe66-f2b9-4be7-ab89-39df1d6ed4bc.jpg",
  "https://www.lerevecraze.com/wp-content/uploads/2024/09/c0919c6f-a904-4ad6-8e94-c08bf76e3649.jpg",
];

const ProductDetailsGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(-1);

  const slides = images.map((image) => ({ src: image }));

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[auto_1fr]">
      <div className="flex flex-row flex-wrap gap-2.5 sm:w-[100px] sm:flex-col lg:w-20 xl:w-[100px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Product"
            className={cn(
              "aspect-[1/1.2] w-full max-w-24 cursor-pointer object-cover opacity-40 duration-300 sm:max-w-[100px]",
              index === currentImage && "opacity-100",
            )}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <div className="relative aspect-[1/1.1] w-full max-w-lg overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Product"
            className={cn(
              "absolute h-full w-full cursor-pointer object-cover duration-300",
              index === currentImage
                ? "visible opacity-100"
                : "invisible opacity-0",
            )}
            onClick={() => setLightboxOpen(index)}
          />
        ))}
      </div>
      <Lightbox
        index={lightboxOpen}
        open={lightboxOpen > -1}
        slides={slides}
        close={() => setLightboxOpen(-1)}
        plugins={[Zoom, Fullscreen]}
      />
    </div>
  );
};

export default ProductDetailsGallery;
