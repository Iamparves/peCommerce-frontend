import HeroBanner from "./HeroBanner";
import HeroSideCategories from "./HeroSideCategories";

const Hero = () => {
  return (
    <div className="bg-white py-8">
      <div className="container grid grid-cols-1 gap-5 lg:grid-cols-[auto_1fr]">
        <HeroSideCategories />
        <HeroBanner />
      </div>
    </div>
  );
};

export default Hero;
