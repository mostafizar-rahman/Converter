"use client"

import Link from "next/link";

const Header = () => {

  return (
    <>
      <nav className="h-20 w-full top-0 z-50 bg-[#20e04a] ">
        <div className="max-w-[1300px] w-full px-4 mx-auto flex items-center justify-between  h-full">
          <Link className="text-2xl font-bold" href="/">
            Conveter
          </Link>
          <div className="flex items-center">
            <div className="space-x-7 ">
              <Link href="/" className="text-lg font-semibold text-white">Home</Link>
              <Link href="/countryList" className="text-lg font-semibold text-white">Country List</Link>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
