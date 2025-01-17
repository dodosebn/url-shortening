'use client';
import { Header, Main, Illustration, AdvStat, Boost, Foot } from "@/components";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="font-Poppins bg-slate-50 text-gray-600 overflow-x-hidden">
      <div className="text-lg mx-auto h-auto">
        <section className="lg:px-[5rem] p-3">
          <Header isMobile={isMobile} setIsMobile={setIsMobile} />
          <Illustration />
          <Main isMobile={isMobile} setIsMobile={setIsMobile} />
          <AdvStat isMobile={isMobile} />
        </section>
        <Boost isMobile={isMobile} />
        <Foot />
      </div>
    </div>
  );
}
