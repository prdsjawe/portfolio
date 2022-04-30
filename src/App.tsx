import React from "react";
import { Route, Routes } from "react-router-dom";

import { BaseLayout } from "@/layout";
import { Home, About, Contact, Projects } from "@pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
