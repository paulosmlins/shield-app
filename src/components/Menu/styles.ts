import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 3px 0;
  align-items: center;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: center;
  background-color: #000;
`;

export const MenuLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
