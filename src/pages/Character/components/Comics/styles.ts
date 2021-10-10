import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const ComicsContainer = styled.div`
  width: 80%;
  padding: 50px 0 70px 0;
  border: 0;
  display: flex;
  margin: 0 auto;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ComicsGridContainer = styled(Grid)`
  gap: 10px 50px;
`;

export const ComicsGrid = styled(Grid)`
  padding: 10px 0;
  margin: 0;
  gap: 10px 0;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
`;

export const ComicsImg = styled.img`
  border-radius: 10px;
  box-shadow: 0 0 30px rgb(0, 0, 0, 30%);
  width: 250px;
`;

export const ComicsName = styled.h3`
  margin: 0 20px;
  color: #000;
  text-align: center;
`;
