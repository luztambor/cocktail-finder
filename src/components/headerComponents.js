import styled from 'styled-components';

export const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  align-content: center;
  position: -webkit-sticky;
  position: sticky;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-content: center;
  margin: auto;
  padding-top:32px;
  box-sizing: border-box;
`;

export const SearchInput = styled.input`
  display: flex;
  height:46px;
  width: 700px;
  font-size: 26px;
  box-sizing: border-box;
`;