import React, { useEffect } from 'react';
import BoostMobi from '@/public/bg-boost-mobile.svg';
import BoostDesk from '@/public/bg-boost-desktop.svg';
import { BoostProps } from '@/types';
import { DbBtn } from './customs';

const Boost: React.FC<BoostProps> = ({ isMobile }) => {
  const BoostBackgroundStyles = {
    backgroundImage: `url(${isMobile ? BoostMobi.src : BoostDesk.src})`,
    backgroundColor: 'hsl(257, 27%, 26%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='mt-[5rem]'>
    <div style={BoostBackgroundStyles} className="mx-auto text-center py-5">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">
        Boost your links today
      </h2>
      <div className='mt-6'>
        <DbBtn btnTxt="Get started" />
      </div>
    </div>
    </div>
  );
};

export default Boost;