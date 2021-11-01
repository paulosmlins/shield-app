import React from "react";
import LogosFooter from "./components/LogosFooter";

import { FooterContainer, DevName } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LogosFooter />
      <DevName>Developed by Paulo Lins</DevName>
    </FooterContainer>
  );
};

export default Footer;
