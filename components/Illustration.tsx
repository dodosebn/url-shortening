import React from 'react';
import Image from 'next/image';
import illusImg from '@/public/illustration-working.svg';
import { DbBtn } from './customs';

const Illustration: React.FC = () => {
  return (
    <section className="p-3 mt-5 lg:mt-0 relative z-20 flex flex-col md:flex-row items-center overflow-x-hidden">
      <div>
        <Image src={illusImg} alt="Illustration of someone working" className="bg-no-repeat bg-cover w-[44em] h-[12em] md:w-[50em]" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">More than just shorter links</h1>
        <p className="text-lg text-gray-600 mb-6">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <DbBtn btnTxt="Get started" />
      </div>
    </section>
  );
};

export default Illustration;
