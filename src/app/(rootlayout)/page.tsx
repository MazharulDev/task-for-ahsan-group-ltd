import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Home/Navbar";

const RootPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${"https://i.ibb.co/CMxnFpP/Screenshot-36.png"})`,
          height: "100%",
          width: "100%",
        }}
        className="w-full bg-center h-full"
      >
        <div className="w-full bg-black opacity-80 text-white">
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default RootPage;
