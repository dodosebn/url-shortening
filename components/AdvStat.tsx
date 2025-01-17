import React from 'react';
import { motion } from 'framer-motion';
import { AdvStatTemp, AdStatColorBtw } from './customs';
import Brand from '@/public/icon-brand-recognition.svg'; 
import Records from '@/public/icon-detailed-records.svg';
import Customiz from '@/public/icon-fully-customizable.svg';
import { BoostProps } from '@/types';

const AdvStat: React.FC<BoostProps> = ({ isMobile }) => {
  return (
    <motion.div 
      className="p-3 mt-5 lg:mt-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-veryDarkViolet font-bold text-[1.7rem]">
          Advanced Statistics
        </h1>
        <p className="text-gray-600 pt-3 lg:text-center lg:w-[30rem] mx-auto">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </motion.div>

      <div className="mt-20 mx-4 flex flex-col lg:flex-row justify-center gap-[0.1rem]">
        {/* First Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AdvStatTemp
            imgSrc={Brand}
            title="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />
        </motion.div>

        <AdStatColorBtw/>

        {/* Second Card */}
        <motion.div
          className="lg:pt-9"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <AdvStatTemp
            imgSrc={Records}
            title="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </motion.div>

        <AdStatColorBtw />

        {/* Third Card */}
        <motion.div
          className="lg:pt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AdvStatTemp
            imgSrc={Customiz}
            title="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdvStat;
