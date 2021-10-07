import styled from "styled-components";

export const Title = styled.h1`
  color: #fff;
  font-weight: bold;
  margin: 0;
`;

export const Title1 = styled.span`
  color: #0d123f;
  background-color: rgb(255, 255, 255, 80%);
  border-radius: 50px;
  padding: 0 10px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  gap: 20px 0;
  padding: 55px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0d123f;
`;

export const SearchBox = styled.div`
  width: 500px;
  height: auto;
  border-radius: 40px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  text-align: center;
  border-radius: 60px;
  padding: 0 20px;
  margin: 8px 0;
  width: 100%;
  height: 30px;
  border: 0 none;
  color: rgb(7, 11, 46, 100%);
  font-size: 1.1rem;
  font-weight: bold;

  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;
