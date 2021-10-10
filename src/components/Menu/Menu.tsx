import React from "react";
import LogoMenu from "./components/LogoMenu";
//import SearchBar from "./components/search";
import { MenuContainer, MenuLink } from "./styles";

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuLink href="/">
        <LogoMenu />
      </MenuLink>
    </MenuContainer>
  );
};

export default Menu;
