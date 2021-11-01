import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  CharacterContainer,
  CharacterGrid,
  CharacterImg,
  CharacterName,
  CharacterDesc,
  CharacterTags,
  CharacterGridContainer,
  CharactersTitle,
  TitleLine,
} from "./styles";
import ComicsList from "./components/Comics";

import api from "services/api";

interface Characters {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Character: React.FC = () => {
  const [characters, setCharacters] = useState<Characters>();
  const params = useParams<{ id: string }>();

  const getCharacters = async () => {
    const result = await api.get(
      `characters/${params.id}?ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`
    );

    setCharacters(result.data.data.results[0]);
  };

  useEffect(() => {
    getCharacters();
  }, [params.id]);

  return (
    <>
      <CharacterContainer>
        <TitleLine>
          <CharactersTitle>About</CharactersTitle>
        </TitleLine>

        <CharacterGridContainer
          container
          justifyContent="center"
          alignItems="center"
        >
          <CharacterGrid container item md={3}>
            <CharacterImg
              src={`${characters?.thumbnail.path}/standard_fantastic.${characters?.thumbnail.extension}`}
              alt={characters?.name}
            />
          </CharacterGrid>
          <CharacterGrid container item md={5} direction="column">
            <div>
              <CharacterTags>Name:</CharacterTags>
              <CharacterName>{characters?.name}</CharacterName>
            </div>
            <div>
              <CharacterTags>Description:</CharacterTags>
              <CharacterDesc>
                {characters?.description ||
                  `Search error... ${characters?.name} it's still a mystery and doesn't have any extra details`}
              </CharacterDesc>
            </div>
          </CharacterGrid>
        </CharacterGridContainer>
        <TitleLine>
          <CharactersTitle>{characters?.name} Comics</CharactersTitle>
        </TitleLine>
        <ComicsList />
      </CharacterContainer>
    </>
  );
};

export default Character;
