import Link from "next/link";

const NavbarSimple = () => {
  return (
    <div className=" bg-[#050505]">
      <div className="max-w-[1200px] mx-auto p-2">
        <Link href="/" className="mr-2 cursor-pointer">
          <h4 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-[#0392F3] to-[#2E1DBC] text-transparent bg-clip-text uppercase ">
            Movie
          </h4>
          <p className="ml-10  md:ml-14 text-white font-thin leading-3">
            World
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavbarSimple;
