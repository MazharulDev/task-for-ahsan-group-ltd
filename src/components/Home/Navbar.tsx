import userIcon from "../../../public/assets/userIcon.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center py-4">
          <div>
            <h4 className="font-bold text-2xl bg-gradient-to-r from-[#0392F3] to-[#2E1DBC] text-transparent bg-clip-text uppercase ">
              Movie
            </h4>
            <p className="ml-14 text-white font-thin leading-3">World</p>
          </div>
          <div>
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
              <div className="md:flex">
                <div className="w-full p-3">
                  <div className="relative">
                    <div className="absolute fa fa-search text-gray-400 top-2 left-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="18"
                        height="18"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="bg-white h-8 w-full px-10 rounded-lg focus:outline-none "
                      placeholder="Search movies"
                    />
                    <span className="absolute top-1 right-1 pl-4">
                      <select className="border-none  rounded bg-gray-400  outline-none">
                        <option selected value="en">
                          All
                        </option>
                        <option value="bn">English</option>
                        <option value="bn">Japan</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 text-white">
            <p className="text-[#FFD21A]">Get Pro</p>
            <p className="hover:text-gray-100 cursor-pointer">Movies</p>
            <p className="hover:text-gray-100 cursor-pointer">Watch-list</p>
            <select className="border-none bg-gradient-to-r from-[#0392F3] to-[#2E1DBC] bg-gray-400 p-2 rounded-3xl  outline-none">
              <option selected value="en">
                EN
              </option>
              <option value="bn">BN</option>
            </select>
            <Image
              className="cursor-pointer"
              src={userIcon}
              width={20}
              height={20}
              alt="icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
