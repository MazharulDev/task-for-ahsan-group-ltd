"use client";

import { useMoviesQuery } from "@/redux/api/moviesApi";
import Image from "next/image";
import MovieCard from "../shared/MovieCard";

const UpcomingMovieSection = () => {
  const { data: movies } = useMoviesQuery(undefined);
  return (
    <div className="bg-gradient-to-r from-[#05121A] to-[#050505] pb-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center py-10">
          <h2 className="text-3xl text-[#0399FA] font-bold uppercase">
            Upcoming <span className="text-[#F6C618]">Movies</span>
          </h2>
          <p className="text-gray-200 mt-4">
            we are constantly offer new movies
          </p>
        </div>
        <div className="md:flex justify-center items-center gap-5">
          {movies?.slice(0, 4).map((movie: any) => (
            <MovieCard key={movie?._id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovieSection;
