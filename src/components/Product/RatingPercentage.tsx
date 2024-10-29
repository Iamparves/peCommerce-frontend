interface RatingPercentageProps {
  title: string;
  rating: string;
}

const RatingPercentage: React.FC<RatingPercentageProps> = ({
  title,
  rating,
}) => {
  return (
    <div className="grid grid-cols-[50px_1fr_35px] items-center gap-2 font-medium">
      <p
        className={`text-xs ${
          rating === "0%" ? "text-[#848484]" : "text-[#FF8429]"
        }`}
      >
        {title}
      </p>
      <div className="h-5 w-full overflow-hidden rounded-sm bg-gray-200 shadow-inner">
        <div
          className={`h-full bg-gradient-to-b from-[#ffbb4d] to-[#FF8429]`}
          style={{ width: rating }}
        ></div>
      </div>
      <p
        className={`text-right text-xs ${
          rating === "0%" ? "text-[#848484]" : "text-[#FF8429]"
        }`}
      >
        {rating}
      </p>
    </div>
  );
};

export default RatingPercentage;
