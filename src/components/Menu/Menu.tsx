import React from "react";
import LogoMenu from "./components/LogoMenu";
//import SearchBar from "./components/search";
import { MenuContainer } from "./styles";

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <a href="/">
        <LogoMenu />
      </a>
    </MenuContainer>
  );
};

export default Menu;
