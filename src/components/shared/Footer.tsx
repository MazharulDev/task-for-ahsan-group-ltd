import Image from "next/image";
import facebook from "../../../public/assets/facebook.png";
import twitter from "../../../public/assets/twitter.png";
import linkedIn from "../../../public/assets/linkedIn.png";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-gray-200">
      <div className="relative  pt-8 pb-6 max-w-[1200px] mx-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 ">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm  mb-2 font-bold">
                    Upcoming movies
                  </span>
                  <ul className="list-unstyled text-gray-400">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        JAWAN
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        The Vampire Diaries
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Birbia
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Teen All
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        NCIS
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-6/12 ">
                  <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                    Aditional Pages
                  </span>
                  <ul className="list-unstyled text-gray-400">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/12 mx-auto">
              <div className="mb-3">
                <h4 className="font-bold text-2xl bg-gradient-to-r from-[#0392F3] to-[#2E1DBC] text-transparent bg-clip-text uppercase ">
                  Movie
                </h4>
                <p className="ml-14 text-white font-thin leading-3">World</p>
              </div>
              <h5 className="text-base mt-0 mb-2 text-gray-400">
                © 2023 movieworld.com. All Rights Reserved. This site is not
                affiliated or owned by the listed movie streaming platform
                owners.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-[#0097FA] text-lightBlue-400 shadow-lg font-normal  items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Image
                    width="30"
                    height="30"
                    src={facebook}
                    alt="facebook-new"
                  />
                </button>
                <button
                  className="bg-[#0097FA] text-lightBlue-400 shadow-lg font-normal  items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Image
                    width="30"
                    height="30"
                    src={twitter}
                    alt="twitter-new"
                  />
                </button>
                <button
                  className="bg-[#0097FA] text-lightBlue-400 shadow-lg font-normal  items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Image
                    width="30"
                    height="30"
                    src={linkedIn}
                    alt="twitter-new"
                  />
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-400 font-semibold py-1">
                Copyright © 2023 Movie World ALL Right Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
