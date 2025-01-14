'use client';

import Image from 'next/image';
import logo from '@/public/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import React from 'react';

import { NavItemProps, NavBtnProps, HeaderProps } from '@/types';

const Header: React.FC<HeaderProps> = ({ isMobile, setIsMobile }) => {
  const navItems: NavItemProps = ['Features', 'Pricing', 'Resources'];
  const navBtns: NavBtnProps = ['Login', 'Sign Up'];

  return (
    <header className="p-3 relative z-10">
      <nav className="flex justify-between items-center p-4">
        <div>
          <Image src={logo} alt="Logo" width={50} height={50} priority />
        </div>

        <ul className="hidden lg:flex lg:pr-[13rem] space-x-8 mx-auto lg:bg-slate-50 bg-DarkViolet">
          {navItems.map((item: string, index: number) => (
            <li key={index} className="text-grayish-violet hover:text-black transition justify">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex space-x-4">
          {navBtns.map((btn: string, index: number) => (
            <button
              key={index}
              className={`py-2 px-4 rounded ${btn === 'Sign Up' ? 'bg-cyan text-white' : 'bg-transparent text-grayish-violet'} hover:bg-cyan hover:text-white transition`}
            >
              {btn}
            </button>
          ))}
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobile(!isMobile)}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu className={isMobile ? 'text-grayish-violet' : ''} />
          </button>
        </div>
      </nav>

      {isMobile && (
        <aside className="bg-DarkViolet text-white shadow-md py-8 font-semibold lg:hidden mx-auto rounded-lg flex flex-col items-center justify-center z-50">
          <ul className="space-y-4 text-center">
            {navItems.map((item: string, index: number) => (
              <li key={index} className="text-grayish-violet hover:text-white transition">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
          <hr className="border-t border-slate-50 my-4 w-[90%]" />
          <div className="mt-4 space-y-4 w-full flex flex-col items-center">
            {navBtns.map((btn: string, index: number) => (
              <button
                key={index}
                className={`w-[90%] py-2 px-4 rounded ${btn === 'Sign Up' ? 'bg-cyan text-white rounded-3xl' : 'bg-transparent text-grayish-violet'} hover:bg-cyan hover:text-white transition`}
              >
                {btn}
              </button>
            ))}
          </div>
        </aside>
      )}
    </header>
  );
};

export default Header;
