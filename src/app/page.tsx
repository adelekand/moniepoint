"use client"

import { useRef } from "react";
import dynamic from "next/dynamic";

const BottomSection = dynamic(() => import("@/components/BottomSection"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

import TopSection from "@/components/TopSection";
import MiddleSection from "@/components/MiddleSection";
import Header from "@/components/Header";

export default function Home() {
  const elementRef = useRef<null | HTMLDivElement>();

  const handleScrollClick = () => {
    console.log('i am here')
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="main-container">
      <Header />
      <TopSection handleScrollClick={handleScrollClick} />
      <MiddleSection ref={elementRef} />
      <BottomSection />
        <Footer />
    </main>
  );
}
