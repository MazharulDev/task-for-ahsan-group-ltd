import SliderForHero from "./SliderForHero";

const HeroSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="md:grid grid-cols-2 items-center place-items-center py-14">
        <div>
          <h1 className="text-6xl text-[#0399FA] font-bold uppercase mb-5">
            Best way of entertainment
          </h1>
          <h3 className="text-2xl font-bold uppercase">
            movies as demand at usd
          </h3>
          <p className="text-[#FFCE19] uppercase font-bold text-2xl">
            10/month
          </p>
        </div>
        <div>
          <SliderForHero />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
