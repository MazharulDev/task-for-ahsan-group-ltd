import HeroSection from "@/components/Home/HeroSection";
import MyAddedMovie from "@/components/Home/MyAddedMovie";
import Navbar from "@/components/Home/Navbar";
import UpcomingMovieSection from "@/components/Home/UpcomingMovieSection";
import Image from "next/image";

const RootPage = () => {
  // const slides = [
  //   "https://i.ibb.co/CJRWWp9/captain-marvel.webp",
  //   "https://i.ibb.co/hKZHTD9/seven.jpg",
  //   "https://i.ibb.co/jR238rr/aladin.jpg",
  // ];
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
      <UpcomingMovieSection />
      <MyAddedMovie />
    </div>
  );
};

export default RootPage;
