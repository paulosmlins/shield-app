import React from "react";

import Search from "components/Search";

import { Container, ContainerBox, TitleErro, TitleErroMen } from "./styles";

const Page404: React.FC = () => {
  return (
    <>
      <Container>
        <Search />
        <ContainerBox>
          <TitleErro>404</TitleErro>
          <TitleErroMen>The system area is not accessible.</TitleErroMen>
        </ContainerBox>
      </Container>
    </>
  );
};

export default Page404;
