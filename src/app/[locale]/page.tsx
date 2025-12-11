'use client'

import Projects from "@/components/home/Projects";
import AboutMeFloatingCard from "@/components/home/AboutMeFloatingCard";
import Education from "@/components/home/Education";

export default function Home() {

  return (
    <div className="w-full flex flex-col px-0 gap-8 lg:flex-row  lg:px-24">
      <AboutMeFloatingCard />

      <div className="w-full flex flex-col items-center lg:items-end">
        <div className="w-[80%] flex flex-col gap-12 items-center lg:w-[45%] lg:items-end">
          <Projects />
          <Education />
        </div>
      </div>
    </div>
  );
}
