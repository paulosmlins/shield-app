import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const ContainerAll = styled.div`
  width: 100%;
  display: flex;
  background-color: #f2f2f2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 60%;
  padding: 50px 0 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroGridContainer = styled(Grid)`
  gap: 10px 10px;
`;

export const HeroGrid = styled(Grid)`
  padding: 10px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    color: #fa00ff;
  }
`;

export const HeroisTitle = styled.h1`
  text-align: center;
  margin: 0;
`;

export const HeroImg = styled.img`
  border-radius: 100%;
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
  margin: 30px 0 80px 0;
`;
