import Image from "next/image";
import heroPoster from "../../../public/assets/jawan_poster.jpg";
import leftarrow from "../../../public/assets/leftarrow.png";
import rightarrow from "../../../public/assets/rightarrow.png";

const SliderForHero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-between ">
        <Image
          className="bg-white p-2 rounded-md ml-[-15px] cursor-pointer"
          src={leftarrow}
          width={40}
          height={40}
          alt="left arrow"
        />

        <Image
          className="bg-white p-2 rounded-md mr-[-15px] cursor-pointer"
          src={rightarrow}
          width={40}
          height={40}
          alt="right arrow"
        />
      </div>
      <Image
        className="rounded-lg flex"
        src={heroPoster}
        width={250}
        height={600}
        alt="Movie poster"
      />
      <div className="flex justify-center mt-[-20px] hover:scale-105 duration-100 shadow-lg">
        <button className="bg-gradient-to-r from-[#0392F3] to-[#2E1DBC] bg-gray-400 p-2 rounded-3xl absolute ">
          WATCH NOW
        </button>
      </div>
    </div>
  );
};

export default SliderForHero;
