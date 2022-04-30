import React from "react";

import { Facebook, Email, Github, LinkedIn } from "@/images";

const SocialIcons = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex w-full gap-6">
        <div className="flex w-1/2 gap-3 items-center">
          <LinkedIn className="w-5 h-5" />
          <div className="text-base font-medium">Jerwin R. Ordillano</div>
        </div>
        <div className="flex w-1/2 gap-3 items-center">
          <Facebook className="w-5 h-5" />
          <div className="text-base font-medium">Jawe</div>
        </div>
      </div>
      <div className="flex w-full gap-6">
        <div className="flex w-1/2 gap-3 items-center">
          <Github className="w-5 h-5" />
          <div className="text-base font-medium">github.com/prdsjawe</div>
        </div>
        <div className="flex w-1/2 gap-3 items-center">
          <Email className="w-5 h-5" />
          <div className="text-base font-medium">jawe.1276@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
