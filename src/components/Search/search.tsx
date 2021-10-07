import React from "react";
import {
  Title,
  Title1,
  SearchContainer,
  SearchInput,
  SearchBox,
} from "./styles";

const SearchBar: React.FC = () => {
  return (
    <SearchContainer>
      <Title>
        <Title1>Shield</Title1> Files
      </Title>
      <SearchBox>
        <SearchInput type="text" />
      </SearchBox>
    </SearchContainer>
  );
};

export default SearchBar;
