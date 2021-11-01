import React from "react";

import Search from "components/Search";

import Characters from "./components/CharactersSearch";
import { ContainerAll } from "./styles";

const SearchPage: React.FC = () => {
  return (
    <ContainerAll>
      <Search />
      <Characters />
    </ContainerAll>
  );
};

export default SearchPage;
