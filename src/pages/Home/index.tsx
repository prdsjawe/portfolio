import React from "react";

import { SectionLayout } from "@/layout";
import { Button, Footer } from "@components";

const Home = () => {
  return (
    <div className="flex flex-col h-full w-full flex-wrap relative">
      <div className="h-auto w-5 flex items-center justify-center absolute inset-0">
        <div className="w-3 bg-slate-700 h-full"></div>
      </div>

      <SectionLayout sectionNumber="0" className="mb-16 flex-grow">
        <div className="w-full px-10 pt-16">
          <div className="mb-6">
            <h1 className="text-5xl">Hi, my name is</h1>
            <h1 className="text-6xl font-bold text-gradient">
              Jerwin R. Ordillano
            </h1>
            <h2 className="text-3xl">
              A <b className="font-bold">Computer Engineer</b> based in Mindoro,
              Philippines.
            </h2>
          </div>
          <div className="flex gap-4">
            <Button type="accent" to="/about">
              About me
            </Button>
            <Button type="primary" to="/contact">
              Get in touch
            </Button>
          </div>
        </div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default Home;
