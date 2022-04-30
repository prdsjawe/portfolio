import React from "react";

import { SectionLayout } from "@/layout";
import { Footer, Code } from "@components";

const About = () => {
  return (
    <div className="flex flex-col h-full w-full flex-wrap relative">
      <div className="h-auto w-5 flex items-center justify-center absolute inset-0">
        <div className="w-3 bg-slate-700 h-full"></div>
      </div>

      <SectionLayout sectionNumber="0" className="mb-16 flex-grow">
        <div className="w-full px-10 pt-16">
          <div className="mb-6">
            <h1 className="text-5xl font-bold">About</h1>
            <h2 className="text-4xl font-semibold">
              Hi! I am a computer engineer.
            </h2>
            <h2 className="text-4xl font-semibold">
              I <span className="italic font-bold text-gradient">design</span>{" "}
              and <span className="font-bold text-gradient">develop</span>{" "}
              websites.
            </h2>
          </div>
          <div className="mb-10">
            <p className="text-2xl">
              I mostly worked in assisting web developers maintain client
              websites, from website builders to creating websites from scratch.
            </p>
            <br />
            <p className="text-2xl">
              I am also a team member of a graphics design startup company.
              We’ve helped small to medium businesses and government agencies
              for their social media designs, logo design and video animations.
            </p>
            <br />
            <p className="text-2xl">
              Out of work, I love to travel. I love taking pictures and spend
              time with my family. I also am learning on my technology stacks,
              and at most times, I love to sleep.
            </p>
          </div>
          <div>
            <Code />
          </div>
        </div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default About;
