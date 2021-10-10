import Menu from "components/Menu";
import Footer from "components/Footer";
import React from "react";
import Routers from "../routers/routers";

import { Container } from "./styles";

const App: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Routers />
      <Footer />
    </Container>
  );
};

export default App;
