"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { closes, menues } from "@/assets";
import { navLinks } from "@/constants";
import { motion } from "framer-motion";

export function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 text-gray-200 p-2 bg-transparent"
      style={{
        background: "transparent",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 sm:flex">
        <Link className="flex items-center gap-2" href="/">
          <Image
            alt="Logo"
            className="h-8 w-8"
            height={50}
            src="/club.png"
            width={50}
          />

          <span className="text-xl font-bold text-purple-600  ">
            Linux Club{" "}
          </span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6 sm:flex">
          <div className="flex-1 items-center gap-4 md:gap-6 sm:flex hidden">
            <Link className="text-md font-bold  hover:text-[#8602FA]" href="/">
              Home
            </Link>
            <Link
              className="text-md font-bold   hover:text-[#8602FA]"
              href="/Events"
            >
              Events
            </Link>
            <Link
              className="text-md font-bold   hover:text-[#8602FA]"
              href="/Team"
            >
              Team
            </Link>
            <Link
              className="text-md font-bold   hover:text-[#8602FA]"
              href="/Contact"
            >
              Contact
            </Link>
          </div>

          <div className="sm:hidden flex flex-1 justify-end items-center ">
            <Image
              src={toggle ? closes : menues}
              alt="menu"
              className="w-[28px] h-[28px] object-contain mr-4 cursor-pointer  "
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-black `}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <motion.li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-gray-300"
                    } ${
                      index === navLinks.length - 1 ? "mb-0" : "mb-4"
                    } opacity-[180] hover:text-purple-600  transition duration-300 ease-in-out`}
                    onClick={() => setActive(nav.title)}
                  >
                    <Link href={`${nav.id}`}>{nav.title}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
