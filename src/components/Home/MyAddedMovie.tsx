import Link from "next/link";

const MyAddedMovie = () => {
  return (
    <div className="bg-gradient-to-r from-[#05121A] to-[#050505] ">
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="text-center py-10">
            <h2 className="text-3xl text-[#0399FA] font-bold uppercase">
              My Added <span className="text-[#F6C618]">Movies</span>
            </h2>
          </div>
          <div className="flex justify-around items-center py-5">
            <div className="w-80 h-80 rounded-lg border border-dashed border-white bg-[#131718]">
              <div className="h-80 flex justify-center items-center ">
                <Link
                  href="/addmovie"
                  className=" bg-gradient-to-r from-[#0392F3] to-[#2E1DBC] py-2 px-4 rounded-3xl text-white"
                >
                  + ADD MOVIE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddedMovie;
