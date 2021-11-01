import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "services/api";
import Characters from "types/Characters";

import {
  Container,
  HeroGridContainer,
  HeroGrid,
  HeroImg,
  HeroName,
  HeroisTitle,
  TitleLine,
} from "./styles";

const Herois: React.FC = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);

  const getCharacters = async () => {
    const result = await api.get(
      `characters?limit=100ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`
    );

    setCharacters(result.data.data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <Container>
        <TitleLine>
          <HeroisTitle>Characters</HeroisTitle>
        </TitleLine>

        <HeroGridContainer container>
          {characters.map((Hero) => {
            return (
              <HeroGrid
                item
                xs
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Link to={`/characterDetail/${Hero.id}`}>
                  <HeroImg
                    src={`${Hero.thumbnail.path}/standard_fantastic.${Hero.thumbnail.extension}`}
                    alt={Hero.name}
                  />
                  <HeroName>{Hero.name}</HeroName>
                </Link>
              </HeroGrid>
            );
          })}
        </HeroGridContainer>
      </Container>
    </>
  );
};

export default Herois;
