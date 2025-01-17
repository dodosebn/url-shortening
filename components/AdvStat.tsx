import React from 'react';
import { AdvStatTemp, AdStatColorBtw } from './customs';
import Brand from '@/public/icon-brand-recognition.svg'; 
import Records from '@/public/icon-detailed-records.svg';
import Customiz from '@/public/icon-fully-customizable.svg';
import { BoostProps } from '@/types';

const AdvStat: React.FC<BoostProps> = ({isMobile}) => {
  return (
    <div className="p-3 mt-5 lg:mt-0">
      <div className="text-center">
        <h1 className="text-veryDarkViolet font-bold text-[1.7rem]">
          Advanced Statistics
        </h1>
        <p className="text-gray-600 pt-3 lg:text-center lg:w-[30rem] mx-auto">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>
      <div className="mt-20 mx-4 flex flex-col lg:flex-row justify-center gap-[0.1rem]">
        <div>
          <AdvStatTemp
            imgSrc={Brand}
            title="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />
        </div>
        <AdStatColorBtw/>
        <div className='lg:pt-9'>
          <AdvStatTemp
            imgSrc={Records}
            title="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </div>
        <AdStatColorBtw />
        <div className='lg:pt-20'>
          <AdvStatTemp
            imgSrc={Customiz}
            title="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </div>
  );
};

export default AdvStat;
