'use client';

import Image from 'next/image';
import logo from '@/public/logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import React from 'react';
import { HeaderProps } from '@/types';
const Header: React.FC<HeaderProps> = ({ isMobile, setIsMobile }) => {
  return (
    <header>
      <nav className="flex justify-between items-center p-4">
   
        <div>
          <Image src={logo} alt="Logo" width={50} height={50} priority />
        </div>

       
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobile(!isMobile)}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu className={isMobile ? 'text-GrayishViolet' : ''} />
          </button>
        </div>
      </nav>

      {/* Additional content for the sidebar can go here */}
      <aside>
        {/* Placeholder for sidebar content */}
      </aside>
    </header>
  );
};

export default Header;
