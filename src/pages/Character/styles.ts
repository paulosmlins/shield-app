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
  width: 100%;
  gap: 0 60px;
`;

export const CharacterGrid = styled(Grid)`
  padding: 20px 0 80px 0;
  margin: 0;
  gap: 20px 0;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
`;

export const CharactersTitle = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const CharacterImg = styled.img`
  width: 340px;
  border-radius: 100%;
  box-shadow: 0 0 30px rgb(0, 0, 0, 30%);
`;

export const CharacterName = styled.h3`
  margin: 0 30px 0 0;
  color: #fa00ff;
  text-align: left;
`;

export const CharacterDesc = styled.h3`
  margin: 0 30px 0 0;
  color: #000;
  text-align: left;
`;

export const CharacterTags = styled.p`
  margin: 5px 0;
  font-size: 0.9rem;
`;

export const CharacterLink = styled.a`
  margin: 0;
  padding: 0;
  color: #000;
  text-decoration: none;
`;

export const Line = styled.hr`
  width: 100px;
  height: 4px;
  border-radius: 100%;
  background-color: #fa00ff;
  border: none;
  margin: 6px 0;
`;

export const TitleLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
