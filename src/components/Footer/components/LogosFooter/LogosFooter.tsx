import React from "react";

import logoGithub from "assets/github.svg";
import logoLinkedin from "assets/linkedin.svg";

import { LogoContainer, LogoMenu, LogoLink } from "./styles";

const LogosFooter: React.FC = () => {
  return (
    <LogoContainer>
      <LogoLink target="_blank" href="https://github.com/paulosmlins">
        <LogoMenu src={logoGithub} />
      </LogoLink>
      <LogoLink target="_blank" href="https://www.linkedin.com/in/paulosmlins/">
        <LogoMenu src={logoLinkedin} />
      </LogoLink>
    </LogoContainer>
  );
};

export default LogosFooter;
