import Menu from "components/Menu";
import Footer from "components/Footer";
import React from "react";
import Routers from "routers/routers";

import { Container } from "./styles";
import { BrowserRouter } from "react-router-dom";

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
