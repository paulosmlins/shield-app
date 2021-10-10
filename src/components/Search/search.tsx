import React, { useState } from "react";
import {
  Title,
  SearchContainer,
  SearchInput,
  SearchButton,
  IconSearch,
  SearchBox,
  SearchForm,
  TitleLine,
  Line,
} from "./styles";
import Search from "assets/Search.svg";

const SearchBar: React.FC = () => {
  const [props, setProps] = useState("");
  const getProps = (e: any) => {
    setProps(e.target.value);
  };

  const searchSubmit = (e: any) => {
    window.location.href = `/search/${props}`;
    e.preventDefault();
    return false;
  };

  return (
    <SearchContainer>
      <TitleLine>
        <Title>Shield Files</Title>
        <Line />
      </TitleLine>

      <SearchBox>
        <SearchForm onSubmit={searchSubmit}>
          <SearchInput
            type="text"
            name="Search"
            value={props}
            onChange={(e) => getProps(e)}
          />
          <SearchButton type="submit">
            <IconSearch src={Search} />
          </SearchButton>
        </SearchForm>
      </SearchBox>
    </SearchContainer>
  );
};

export default SearchBar;
