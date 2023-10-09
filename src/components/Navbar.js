import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-10 flex justify-around items-center">
      <div className="flex gap-3">
        <h1 className="text-indigo-500 font-bold text-lg">EV Explorers</h1>
      </div>
      <div className="hidden sm:flex sm:gap-3 md:gap-5 lg:gap-7">
        <Link href="/" className="text-base font-semibold text-gray-500">
          Home
        </Link>
        <Link href="/about" className="text-base font-semibold text-gray-500">
          About
        </Link>
        <Link href="/contact" className="text-base font-semibold text-gray-500">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
