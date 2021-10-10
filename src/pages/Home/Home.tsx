import React from "react";

import { Container } from "./styles";

import Herois from "components/Characters";
import Search from "components/Search";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Search />
        <Herois />
      </Container>
    </>
  );
};

export default Home;
