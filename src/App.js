import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
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

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-content: center;
  margin: auto;
  box-sizing: border-box;
  padding-top:16px;
`;

const SearchInput = styled.input`
  height:36px;
  font-size: 26px;
`;

function App() {
  return (
    <Container>
      <Header>
        Cocktail Finder
      </Header>
      <SearchBar>
        <SearchInput/>
      </SearchBar>
      Hello, world!
    </Container>
  );
}

export default App;
