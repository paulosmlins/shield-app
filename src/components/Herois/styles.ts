import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const Container = styled.div`
  width: 65%;
  padding: 50px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroGrid = styled(Grid)`
  padding: 10px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    color: red;
  }
`;

export const HeroisTitle = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

export const HeroImg = styled.img`
  border-radius: 1000%;
  transition: transform 0.3s;
  transform: scale(1);
  box-shadow: 0 0 30px rgb(7, 11, 46, 30%);

  :hover,
  :focus {
    object-fit: cover;
    transform: scale(1.05);
  }
`;

export const HeroName = styled.h3`
  text-align: center;
  color: rgb(7, 11, 46, 100%);
`;

export const HeroLink = styled.a`
  margin: 0;
  padding: 0;
  color: rgb(7, 11, 46, 100%);
  text-decoration: none;
`;
