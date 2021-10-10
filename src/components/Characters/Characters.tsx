import React, { useEffect, useState } from "react";
import {
  Container,
  HeroGridContainer,
  HeroGrid,
  HeroImg,
  HeroName,
  HeroLink,
  HeroisTitle,
  TitleLine,
  Line,
} from "./styles";

import api from "services/api";

interface Characters {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Herois: React.FC = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);

  const getCharacters = async () => {
    const result = await api.get(
      `characters?ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`
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
          <Line />
        </TitleLine>

        <HeroGridContainer container>
          {characters.map(function (Hero) {
            return (
              <HeroGrid
                item
                xs
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <HeroLink href={`/characterDetail/${Hero.id}`}>
                  <HeroImg
                    src={`${Hero.thumbnail.path}/standard_fantastic.${Hero.thumbnail.extension}`}
                    alt={Hero.name}
                  />
                  <HeroName>{Hero.name}</HeroName>
                </HeroLink>
              </HeroGrid>
            );
          })}
        </HeroGridContainer>
      </Container>
    </>
  );
};

export default Herois;
