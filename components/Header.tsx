"use client";

import Image from "next/image";
import logo from "@/public/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { NavItemProps, NavBtnProps, HeaderProps } from "@/types";

const Header: React.FC<HeaderProps> = ({ isMobile, setIsMobile }) => {
  const navItems: NavItemProps = ["Features", "Pricing", "Resources"];
  const navBtns: NavBtnProps = ["Login", "Sign Up"];

  return (
    <div>
      <header className="p-3 relative z-10">
        <nav className="flex justify-between items-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Image src={logo} alt="Logo" priority className="text-2xl" />
          </motion.div>

          <ul className="hidden lg:flex lg:pr-[13rem] space-x-8 mx-auto lg:bg-slate-50">
            {navItems.map((item: string, index: number) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="hover:text-black transition"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>

          <div className="hidden lg:flex space-x-4">
            {navBtns.map((btn: string, index: number) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`py-2 px-4 rounded ${btn === "Sign Up" ? "bg-cyan rounded-3xl px-8 py-2 text-white hover:bg-btnHover" : "text-grayish-violet"} transition`}
              >
                {btn}
              </motion.button>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={() => setIsMobile(!isMobile)}
            aria-label="Toggle menu"
            animate={{ rotate: isMobile ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
          >
            <GiHamburgerMenu className={`${isMobile ? "text-gray-600" : ""} text-2xl`} />
          </motion.button>
        </nav>

        <AnimatePresence>
          {isMobile && (
            <motion.aside
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 100}}
              className="bg-DarkViolet text-white text-lg shadow-md py-16 font-semibold lg:hidden mx-auto rounded-xl flex flex-col items-center justify-center z-50 absolute top-[6rem] left-0 w-full"
            >
              <ul className="space-y-4 text-center">
                {navItems.map((item: string, index: number) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-grayish-violet hover:text-white transition"
                  >
                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                  </motion.li>
                ))}
              </ul>
              <hr className="border-t border-slate-50 my-4 w-[90%]" />
              <div className="mt-4 space-y-4 w-full flex flex-col items-center">
                {navBtns.map((btn: string, index: number) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`w-[90%] py-2 px-4 rounded ${btn === "Sign Up" ? "bg-cyan text-white rounded-3xl" : "bg-transparent text-grayish-violet"}`}
                  >
                    {btn}
                  </motion.button>
                ))}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
