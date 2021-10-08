import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const CharacterContainer = styled.div`
  width: 65%;
  padding: 50px 0 0 0;
  border: 0;
  display: flex;
  margin: 0 auto;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CharacterGridContainer = styled(Grid)`
  width: 60%;
  gap: 0 60px;
`;

export const CharacterGrid = styled(Grid)`
  padding: 30px 0;
  margin: 0;
  gap: 20px 0;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
`;

export const CharactersTitle = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

export const CharacterImg = styled.img`
  width: 340px;
  border-radius: 100%;
  box-shadow: 0 0 30px rgb(7, 11, 46, 30%);
`;

export const CharacterName = styled.h3`
  margin: 0;
  color: rgb(7, 11, 46, 100%);
  text-align: left;
`;

export const CharacterTags = styled.p`
  margin: 5px 0;
  font-size: 0.9rem;
`;

export const CharacterLink = styled.a`
  margin: 0;
  padding: 0;
  color: rgb(7, 11, 46, 100%);
  text-decoration: none;
`;

export const Line = styled.div`
  width: 30px;
  border: 5 solid rgb(7, 11, 46, 100%); ;
`;
