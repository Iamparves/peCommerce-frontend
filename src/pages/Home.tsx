import Hero from "@/components/Hero/Hero";
import Benefits from "@/components/Home/Benefits";
import BestSellers from "@/components/Home/BestSellers";
import CallbackBanner from "@/components/Home/CallbackBanner";
import NewestArrivals from "@/components/Home/NewestArrivals";
import RecentBlog from "@/components/Home/RecentBlog";
import ShopByBrand from "@/components/Home/ShopByBrand";
import TopCategories from "@/components/Home/TopCategories";
import TopRated from "@/components/Home/TopRated";

const Home = () => {
  return (
    <main>
      <Hero />
      <BestSellers />
      <TopCategories />
      <TopRated />
      <NewestArrivals />
      <CallbackBanner />
      <ShopByBrand />
      <RecentBlog />
      <Benefits />
    </main>
  );
};

export default Home;
