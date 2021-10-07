import React from "react";

import { Container } from "./styles";

import Menu from "components/Menu";
import Herois from "components/Herois";
import Search from "components/Search";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Menu />
        <Search />
        <Herois />
      </Container>
    </>
  );
};

export default Home;
