"use client";
import { useState } from "react";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { authkey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { role, userId } = getUserInfo() as any;
  const [openMenu, setOpenMenu] = useState(false);
  const logOut = () => {
    removeUserInfo(authkey);
    router.push("/login");
  };
  return (
    <nav className="bg-transparent">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center py-4 px-3">
          <Link href="/" className="mr-2 cursor-pointer">
            <h4 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-[#0392F3] to-[#2E1DBC] text-transparent bg-clip-text uppercase ">
              Movie
            </h4>
            <p className="ml-10  md:ml-14 text-white font-thin leading-3">
              World
            </p>
          </Link>
          <div className="hidden md:block">
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
                      className="bg-white text-black h-8 w-full px-10 rounded-lg focus:outline-none "
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

          <div
            className={`lg:!flex gap-4 lg:items-center lg:bg-transparent bg-blue-400 rounded-md lg:flex-row flex-col lg:p-0 p-3 text-left ${
              openMenu ? "flex text-white" : "hidden"
            }`}
          >
            <Link href="/" className="text-[#FFD21A]">
              Get Pro
            </Link>
            <Link href="/" className="hover:text-gray-100 cursor-pointer">
              Movies
            </Link>
            <Link href="/" className="hover:text-gray-100 cursor-pointer">
              Watch-list
            </Link>
            <select className="border-none bg-gradient-to-r from-[#0392F3] to-[#2E1DBC] bg-gray-400 p-2 rounded-3xl  outline-none">
              <option selected value="en">
                EN
              </option>
              <option value="bn">BN</option>
            </select>
            <div>
              {role === "user" ? (
                <>
                  <div className="flex items-center gap-3">
                    <Link href="/profile" className="cursor-pointer mb-1">
                      <UserOutlined />
                    </Link>
                    <a
                      onClick={logOut}
                      className="text-red-500 cursor-pointer hover:scale-105 duration-100"
                    >
                      Logout
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <a className="bg-gradient-to-r from-[#0392F3] to-[#2E1DBC] p-2 rounded-3xl">
                      Login
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div
            className="lg:hidden text-3xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path>
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path>
                  </g>
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
