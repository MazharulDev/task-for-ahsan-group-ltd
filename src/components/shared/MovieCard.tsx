import Image from "next/image";

const MovieCard = ({ movie }: any) => {
  return (
    <div>
      {/* <div className="relative">
        <Image
          className="border p-1 rounded-lg"
          src={movie?.mainImg}
          width={250}
          height={600}
          alt="Movie poster"
        ></Image>
        <p className="text-2xl font-bold absolute">{movie?.name}</p>
      </div> */}

      <div className="h-[400px] w-[250px] relative rounded-lg  border-blue-500 border-2">
        <Image
          width={250}
          height={600}
          src={movie?.mainImg}
          alt=""
          className="rounded-lg"
        />
        <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full backdrop-blur-sm rounded-b-lg ">
          <h1 className="text-white font-semibold text-4xl text-center ">
            {movie?.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
