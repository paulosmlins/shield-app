import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const ComicsContainer = styled.div`
  width: 80%;
  padding: 50px 0 0 0;
  border: 0;
  display: flex;
  margin: 0 auto;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ComicsGridContainer = styled(Grid)`
  gap: 10px 10px;
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
  box-shadow: 0 0 30px rgb(7, 11, 46, 30%);
  width: 200px;
`;

export const ComicsName = styled.h3`
  margin: 0;
  color: rgb(7, 11, 46, 100%);
  text-align: center;
`;
