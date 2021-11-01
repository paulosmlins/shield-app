import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "services/api";

import {
  ComicsContainer,
  ComicsGrid,
  ComicsImg,
  ComicsName,
  ComicsGridContainer,
} from "./styles";

interface IComics {
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Comics: React.FC = () => {
  const [comics, setComics] = useState<IComics[]>([]);
  const params = useParams<{ id: string }>();

  const getComics = async () => {
    const result = await api.get(
      `characters/${params.id}/comics?limit=50&ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`
    );

    setComics(result.data.data.results);
  };

  useEffect(() => {
    getComics();
  }, [params.id]);

  return (
    <>
      <ComicsContainer>
        <ComicsGridContainer
          container
          justifyContent="center"
          alignItems="normal"
        >
          {comics.map(function (comics) {
            return (
              <ComicsGrid
                item
                xs
                md
                direction="column"
                justifyContent="normal"
                alignItems="center"
              >
                <ComicsImg
                  src={`${comics.thumbnail.path}/portrait_uncanny.${comics.thumbnail.extension}`}
                  alt={comics.title}
                />
                <ComicsName>{comics.title}</ComicsName>
              </ComicsGrid>
            );
          })}
        </ComicsGridContainer>
      </ComicsContainer>
    </>
  );
};

export default Comics;
