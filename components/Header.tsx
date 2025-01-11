'use client';

import Image from 'next/image';
import logo from '@/public/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import React from 'react';

// Props Types
import { NavItemProps, NavBtnProps,HeaderProps } from '@/types';

const Header: React.FC<HeaderProps> = ({ isMobile, setIsMobile }) => {
  // Navigation items and buttons
  const navItems: NavItemProps = ['Features', 'Pricing', 'Resources'];
  const navBtns: NavBtnProps = ['Login', 'Sign Up'];

  return (
    <header>
      <nav className="flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Image src={logo} alt="Logo" width={50} height={50} priority />
        </div>

        {/* Navigation Items */}
        <ul className="hidden lg:flex space-x-8 mx-auto">
          {navItems.map((item: string, index: number) => (
            <li key={index} className="text-grayish-violet hover:text-black transition justify">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          {navBtns.map((btn: string, index: number) => (
            <button
              key={index}
              className={`py-2 px-4 rounded ${
                btn === 'Sign Up' ? 'bg-cyan text-white' : 'bg-transparent text-grayish-violet'
              } hover:bg-cyan hover:text-white transition`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
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

      {/* Sidebar for Mobile */}
      {isMobile && (
        <aside className="bg-white shadow-md p-4 lg:hidden">
          <ul className="space-y-4">
            {navItems.map((item: string, index: number) => (
              <li key={index} className="text-grayish-violet hover:text-black transition">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            {navBtns.map((btn: string, index: number) => (
              <button
                key={index}
                className={`w-full py-2 px-4 rounded ${
                  btn === 'Sign Up' ? 'bg-cyan text-white' : 'bg-transparent text-grayish-violet'
                } hover:bg-cyan hover:text-white transition`}
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
