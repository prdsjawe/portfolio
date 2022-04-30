import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "@components";

const BaseLayout = () => {
  return (
    <div className="mx-52 h-screen flex flex-col">
      <header className="mb-16">
        <Navigation />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
