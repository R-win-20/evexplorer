import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-32 md:h-52 bg-black text-white flex flex-col justify-between items-center md:flex-row md:justify-around">
      <div className="flex justify-around items-center gap-5 py-2">
        <Link href="https://www.facebook.com/profile.php?id=61552027260066">
          <Image
            src="/images/fb1.jfif"
            width={36}
            height={42}
            alt="EV Explorers facebook page"
            className="object-contain"
          />
        </Link>
        <Link href="https://facebook.com">
          <Image
            src="/images/insta.jfif"
            width={32}
            height={32}
            alt="EV Explorers facebook page"
            className="object-contain"
          />
        </Link>
        <Link href="https://facebook.com">
          <Image
            src="/images/x.png"
            width={32}
            height={32}
            alt="EV Explorers facebook page"
            className="object-contain"
          />
        </Link>
        <Link href="https://facebook.com">
          <Image
            src="/images/in.png"
            width={32}
            height={32}
            alt="EV Explorers facebook page"
            className="object-contain"
          />
        </Link>
      </div>
      <div className="uppercase">
        <Link href="/contact" className="text-gray-400 text-base">
          contact us
        </Link>
      </div>
      <div className="text-sm pb-2">
        <span className="text-gray-600 md:cursor-pointer">
          Copyright &copy; EV Explorers - 2023
        </span>
      </div>
    </div>
  );
};

export default Footer;
