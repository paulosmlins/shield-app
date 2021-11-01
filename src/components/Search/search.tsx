import React, { useState } from "react";
import { useHistory } from "react-router";

import Search from "assets/Search.png";

import {
  Title,
  SearchContainer,
  SearchInput,
  SearchButton,
  IconSearch,
  SearchBox,
  SearchForm,
  TitleLine,
} from "./styles";

const SearchBar: React.FC = () => {
  const [props, setProps] = useState("");
  const history = useHistory();
  const getProps = (e: any) => {
    setProps(e.target.value);
  };

  const searchSubmit = (e: any) => {
    if (props === "") {
      e.preventDefault();
      return false;
    } else {
      history.push(`/search/${props}`);
      e.preventDefault();
      return false;
    }
  };

  return (
    <SearchContainer>
      <TitleLine>
        <Title>Shield Files</Title>
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
