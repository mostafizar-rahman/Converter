"use client"
import React from "react";
import Image  from "next/image";
import Link from "next/link";

import facebook from "../../../asstes/icon/facebook.png";
import twitter from "../../../asstes/icon/twitter.png";
import github from "../../../asstes/icon/github.png";
import linkedin from "../../../asstes/icon/linkedin.png";

const Footer = () => {
  return (
    <footer className="py-20 bg-[#02070a]">
      <div className="mt-8">
        <ul className="flex gap-4 justify-center">
          <li className="w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center">
            <Link href="https://web.facebook.com/profile.php?id=100008522538788">
              <Image alt="socal icon" src={facebook} />
            </Link>
          </li>
          <li className="w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center">
            <Link href="https://twitter.com/MDMOSTA23184912">
              <Image alt="socal icon" src={twitter} />
            </Link>
          </li>
          <li className="w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center">
            <Link href="https://www.linkedin.com/in/dev-mostafizar/">
              <Image alt="socal icon" src={linkedin} />
            </Link>
          </li>
          <li className="w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center">
            <Link href="https://github.com/mostafizar-rahman">
              <Image alt="socal icon" src={github} />
            </Link>
          </li>
        </ul>
        <i className="text-center mt-4 block text-white">
          Design And Develope By: 
           <Link
            href="https://mostafizar.netlify.app/"
            className="text-[#20e04ad5] underline"
          >
             Mostafizar
          </Link>
        </i>
      </div>
    </footer>
  );
};

export default Footer;
