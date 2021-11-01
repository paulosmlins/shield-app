import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routers from "routers/routers";
import Footer from "components/Footer";
import Menu from "components/Menu";

import { Container } from "./styles";

const App: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <Menu />
        <Routers />
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

export default App;
