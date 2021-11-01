import React from "react";
import { Link } from "react-router-dom";

import LogoMenu from "./components/LogoMenu";
import { MenuContainer } from "./styles";

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <Link to="/">
        <LogoMenu />
      </Link>
    </MenuContainer>
  );
};

export default Menu;
