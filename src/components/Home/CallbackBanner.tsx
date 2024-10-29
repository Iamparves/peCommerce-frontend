import { Link } from "react-router-dom";

const CallbackBanner = () => {
  return (
    <section className="bg-[url(/images/callback-bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="bg-black/60 py-20 sm:py-24">
        <div className="container flex flex-col items-center text-center">
          <p className="mb-8 text-sm font-medium uppercase text-gray-100 sm:text-base md:text-lg">
            Winter collections are here!
          </p>
          <h2 className="mb-8 max-w-md text-pretty text-3xl font-bold uppercase leading-snug text-white md:max-w-[630px] md:text-5xl md:leading-tight">
            Get up to 30% off on all products
          </h2>
          <Link
            to="/shop"
            className="block rounded-sm bg-white px-3 py-3.5 font-semibold text-[#263587] duration-300 hover:bg-[#E53E3E] hover:text-white sm:px-5 sm:py-4"
          >
            View Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallbackBanner;
