import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

import api from "services/api";

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

interface ICharacters {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Herois: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const params = useParams<{ props: string }>();
  const history = useHistory();

  const getCharacters = async () => {
    const result = await api.get(
      `characters?nameStartsWith=${params.props}&limit=100&ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`
    );

    if (result.data.data.total === 0) {
      history.push("/404");
    } else {
      setCharacters(result.data.data.results);
    }
  };

  useEffect(() => {
    getCharacters();
  });

  return (
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
              <HeroLink to={`/CharacterDetail/${Hero.id}`}>
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
  );
};

export default Herois;
