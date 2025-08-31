'use client'

import Projects from "@/components/home/Projects";
import AboutMeFloatingCard from "@/components/home/AboutMeFloatingCard";
import Education from "@/components/home/Education";

export default function Home() {

  return (
    <div className="w-full flex flex-row px-24">
      <AboutMeFloatingCard />

      <div className="w-full flex flex-col items-end">
        <div className="min-w-[45%] flex flex-col gap-12 items-end">
          <Projects />

          <Education />
        </div>
      </div>
    </div>
  );
}
