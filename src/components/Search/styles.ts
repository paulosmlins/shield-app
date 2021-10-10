import styled from "styled-components";

export const Title = styled.h1`
  color: #fff;
  font-weight: bold;
  margin: 0;
`;

export const SearchContainer = styled.div`
  width: 100%;
  gap: 20px 0;
  padding: 55px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const SearchBox = styled.div`
  border-radius: 40px;
  background-color: #fff;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 0 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchButton = styled.button`
  height: 100%;
  align-items: center;
  border: 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  color: red;
`;

export const IconSearch = styled.img`
  height: 100%;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  text-align: center;
  border-radius: 60px;
  margin: 8px 0;
  width: 500px;
  height: 30px;
  border: 0 none;
  color: #000;
  font-size: 1.1rem;
  font-weight: bold;

  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const Line = styled.hr`
  width: 100px;
  height: 4px;
  border-radius: 100%;
  filter: blur(2px);
  background-color: #fa00ff;
  border: none;
  margin: 6px 0;
`;

export const TitleLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;
