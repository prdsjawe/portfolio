import React from "react";

import { ReactComponent as LinkedInLogo } from "../../images/LinkedIn.svg";
import { ReactComponent as FacebookLogo } from "../../images/Facebook.svg";
import { ReactComponent as EmailLogo } from "../../images/Email.svg";
import { ReactComponent as GithubLogo } from "../../images/Github.svg";

const SocialIcons = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex w-full gap-6">
        <div className="flex w-1/2 gap-3 items-center">
          <LinkedInLogo className="w-5 h-5" />
          <div className="text-base font-medium">Jerwin R. Ordillano</div>
        </div>
        <div className="flex w-1/2 gap-3 items-center">
          <FacebookLogo className="w-5 h-5" />
          <div className="text-base font-medium">Jawe</div>
        </div>
      </div>
      <div className="flex w-full gap-6">
        <div className="flex w-1/2 gap-3 items-center">
          <GithubLogo className="w-5 h-5" />
          <div className="text-base font-medium">github.com/prdsjawe</div>
        </div>
        <div className="flex w-1/2 gap-3 items-center">
          <EmailLogo className="w-5 h-5" />
          <div className="text-base font-medium">jawe.1276@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
