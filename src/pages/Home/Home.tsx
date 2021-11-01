import React from "react";

import Herois from "components/Characters";
import Search from "components/Search";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Search />
      <Herois />
    </Container>
  );
};

export default Home;
