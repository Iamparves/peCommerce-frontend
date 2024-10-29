import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main>
      <section className="bg-white py-20 md:py-24">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-[120px] font-bold text-[#1f1f1f] sm:text-[150px]">
            404
          </h1>
          <h3 className="mb-5 text-3xl font-semibold text-[#848484] sm:text-4xl">
            Oops! Page Not Found!
          </h3>
          <p className="mb-16 text-base text-[#777]">
            Please go back to{" "}
            <Link className="text-[#FF4135] underline" to="/">
              Homepage
            </Link>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="flex w-[265px] items-center justify-center gap-4 border-2 border-black bg-black px-2 py-3.5 text-xl font-semibold capitalize text-white duration-300 hover:bg-transparent hover:text-black"
            >
              Go back to Home
              <MoveUpRight className="w-5" />
            </Link>
            <Link
              to="/shop"
              className="flex w-[265px] items-center justify-center gap-4 border-2 border-black bg-transparent px-2 py-3.5 text-xl font-semibold capitalize text-black duration-300 hover:bg-black hover:text-white"
            >
              Continue Shopping
              <MoveUpRight className="w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
