import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import {
  Container,
  HeroGrid,
  HeroImg,
  HeroName,
  HeroLink,
  HeroisTitle,
} from "./styles";

import api from "services/api";

const PUBLIC_KEY = "343213573d48ff61c624d9093ca051ed";
const HASH = "e831a8c0e195ad81e7eae36e8954d522";

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
      `characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`
    );

    setCharacters(result.data.data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <Container>
        <HeroisTitle>Characters</HeroisTitle>
        <Grid container>
          {characters.map(function (Hero) {
            return (
              <HeroGrid
                item
                xs
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <HeroLink href={`/${Hero.id}`}>
                  <HeroImg
                    src={`${Hero.thumbnail.path}/standard_fantastic.${Hero.thumbnail.extension}`}
                    alt={Hero.name}
                  />
                  <HeroName>{Hero.name}</HeroName>
                </HeroLink>
              </HeroGrid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Herois;
