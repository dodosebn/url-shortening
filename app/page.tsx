'use client';
import { Header, Main, Illustration, AdvStat, Boost, Foot}from "@/components";
import { useState } from "react";
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="font-Poppins bg-slate-50 " >
      <div className="text-lg max-w-screen-lg mx-auto h-auto">
        <section className="p-3">
        <Header isMobile={isMobile} setIsMobile={setIsMobile} />
        <Illustration/>
        <Main isMobile={isMobile} setIsMobile={setIsMobile} />
      <AdvStat />
      </section>
      <Boost isMobile={isMobile}/>
      <Foot />
      </div>
    </div>
  );
}
