import Image from "next/image";
import heroPoster from "../../../public/assets/jawan_poster.jpg";

const SliderForHero = () => {
  return (
    <div>
      <Image
        className="rounded-lg"
        src={heroPoster}
        width={250}
        height={600}
        alt="Movie poster"
      />
    </div>
  );
};

export default SliderForHero;
