import React from "react";
import LogosFooter from "./components/LogosFooter";
//import SearchBar from "./components/search";
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
