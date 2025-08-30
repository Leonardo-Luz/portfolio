'use client'

import { Separator } from "@/components/ui/separator";
import AboutMe from "./about-me/page";
import EducationExperience from "./education-experience/page";
import Projects from "./projects/page";

// FIX: REMAKE HOME PAGE

export default function Home() {

  return (
    <div>
      <AboutMe />

      <Separator className="my-30" />

      <EducationExperience />

      <Separator className="my-30" />

      <Projects />
    </div>
  );
}
