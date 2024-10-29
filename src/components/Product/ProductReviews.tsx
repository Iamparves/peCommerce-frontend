import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { FaStar } from "react-icons/fa";
import RatingPercentage from "./RatingPercentage";

const reviews = [
  {
    avatar:
      "https://wphix.com/html/blackwood-prv/blackwood/assets/img/author/avater-2.png",
    rating: 4,
    name: "Eileen Alene",
    date: "2024-09-15T00:00:00.000Z",
    review:
      "I love the quality of the product. It is very comfortable and the design is very stylish.",
  },
  {
    avatar:
      "https://wphix.com/html/blackwood-prv/blackwood/assets/img/author/avater-3.png",
    rating: 5,
    name: "Ken Nolan",
    date: "2024-08-12T00:00:00.000Z",
    review:
      "The product is very good. I am very satisfied with the quality of the product. I will definitely recommend it to my friends.",
  },
  {
    avatar:
      "https://azim.commonsupport.com/Castro/assets/images/resource/review-1.png",
    rating: 4,
    name: "Linda Smith",
    date: "2024-07-10T00:00:00.000Z",
    review:
      "I ordered the product and it was delivered on time. The quality is very good as well as the design.",
  },
];

const ProductReviews = () => {
  const averageRating = 4.5;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-3">
        <div className="flex flex-col justify-center rounded-md border border-[#ebebeb] p-5 text-center">
          <h3 className="mb-3 text-5xl font-bold text-[#222] lg:text-[52px]">
            {averageRating.toFixed(1)}
          </h3>
          <p className="text-[#848484]">Based on 250 reviews</p>
        </div>
        <div className="rounded-md border border-[#ebebeb] p-5">
          <div className="mx-auto grid max-w-[360px] grid-rows-[repeat(5,20px)] gap-1">
            <RatingPercentage title="5 Star" rating="68%" />
            <RatingPercentage title="4 Star" rating="21%" />
            <RatingPercentage title="3 Star" rating="16%" />
            <RatingPercentage title="2 Star" rating="0%" />
            <RatingPercentage title="1 Star" rating="5%" />
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="grid grid-cols-[auto_1fr] gap-3 border-b pb-6 last:border-0 last:pb-0 sm:gap-5"
          >
            <img
              src={review.avatar}
              alt={review.name}
              className="block size-14 rounded-full object-cover sm:size-20"
            />
            <div>
              <div className="mb-2 flex items-center gap-0.5 text-sm">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={cn(
                      "text-gray-300",
                      review.rating > index && "text-[#f9a52b]",
                    )}
                  />
                ))}
              </div>
              <p className="mb-4 text-[15px]">
                <span className="font-medium">{review.name}</span>
                <span className="inline-block px-1 text-[#848484]">-</span>
                <span className="text-[#878787]">
                  {format(new Date(review.date), "MMM dd, yyyy")}
                </span>
              </p>
              <p className="text-gray-500">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
