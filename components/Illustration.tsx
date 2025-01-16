import React from 'react';
import Image from 'next/image';
import illusImg from '@/public/illustration-working.svg';
import { DbBtn } from './customs';

const Illustration: React.FC = () => {
  return (
    <section className="relative z-0 flex flex-col-reverse lg:flex-row items-center lg:space-x-8 overflow-x-hidden">
      {/* Text Content */}
      <div className="text-center lg:text-left lg:w-1/2 p-6">
        <h1 className="text-4xl font-bold mb-4 lg:w-[25rem]">
          More than just shorter links
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <DbBtn btnTxt="Get started" />
      </div>

      {/* Illustration Image */}
      <div className="relative w-[30rem] lg:w-1/2 h-[20rem] lg:h-[35rem] mx-auto">
        <Image
          src={illusImg}
          alt="Illustration of working"
          className="bg-no-repeat bg-cover"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </section>
  );
};

export default Illustration;
