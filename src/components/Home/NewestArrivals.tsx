import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import NewestProductList from "./NewestProductList";

const NewestArrivals = () => {
  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="container">
        <div className="relative mb-10 flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 pb-3 sm:items-end">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Newest Arrivals
          </h2>
          <div className="flex gap-3">
            <button className="newestArrivals-button-prev size-10 rounded-full bg-[#f6f6f7] p-2.5 text-[#74787c] duration-300 hover:bg-[#E53E3E] hover:text-white sm:size-11">
              <ArrowLeft className="size-full" strokeWidth={1.7} />
            </button>
            <button className="newestArrivals-button-next size-10 rounded-full bg-[#f6f6f7] p-2.5 text-[#74787c] duration-300 hover:bg-[#E53E3E] hover:text-white sm:size-11">
              <ArrowRight className="size-full" strokeWidth={1.7} />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 h-[1px] w-1/4 min-w-[120px] max-w-[200px] bg-[#FCBE00]"></div>
        </div>
        <NewestProductList />
        <div className="mt-8 flex justify-center">
          <Link
            className="mx-auto block rounded-full bg-[#263587] px-10 py-3.5 text-center text-base font-semibold text-white duration-300 hover:bg-[#E53E3E] sm:text-lg"
            to="/shop"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewestArrivals;
