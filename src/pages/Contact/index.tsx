import React from "react";
import Footer from "../../components/Footer";
import SocialIcons from "../../components/SocialIcons";
import SectionLayout from "../../layout/SectionLayout";

const Contact = () => {
  return (
    <div className="flex flex-col h-full w-full flex-wrap relative">
      <div className="h-auto w-5 flex items-center justify-center absolute inset-0">
        <div className="w-3 bg-slate-700 h-full"></div>
      </div>

      <SectionLayout sectionNumber="0" className="mb-16 flex-grow">
        <div className="w-full px-10 pt-16">
          <div className="mb-16">
            <h1 className="text-5xl font-bold">
              Get in <span className="text-gradient">touch</span>
            </h1>
            <h2 className="text-4xl font-semibold">How can I help you?</h2>
          </div>
          <SocialIcons />
        </div>
      </SectionLayout>

      <Footer />
    </div>
  );
};

export default Contact;
