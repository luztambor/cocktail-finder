import styled from 'styled-components';
import {Header, SearchBar, SearchInput} from './components/headerComponents'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 36px;
  justify-content: space-evenly;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 16px 0;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;

const ResultImage = styled.img`
`;

const ResultName = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Header>
        Cocktail Finder
      </Header>
      <SearchBar>
        <SearchInput placeholder="Search by name or ingredient..."/>
      </SearchBar>
      Hello, world!
      <ResultListContainer>
        <ResultContainer>
          <ResultImage src="logo192.png" />
          <ResultName>Name Here</ResultName>
        </ResultContainer>
        <ResultContainer>
          <ResultImage src="logo192.png" />
          <ResultName>Name Here</ResultName>
        </ResultContainer>
        <ResultContainer>
          <ResultImage src="logo192.png" />
          <ResultName>Name Here</ResultName>
        </ResultContainer>
        <ResultContainer>
          <ResultImage src="logo192.png" />
          <ResultName>Name Here</ResultName>
        </ResultContainer>
        <ResultContainer>
          <ResultImage src="logo192.png" />
          <ResultName>Name Here</ResultName>
        </ResultContainer>
        <ResultContainer>
          <ResultImage src="logo192.png" />
          <ResultName>Name Here</ResultName>
        </ResultContainer>
        <ResultContainer>
          <ResultImage src="logo192.png" />
          <ResultName>Name Here</ResultName>
        </ResultContainer>
        <ResultContainer>
          <ResultImage src="logo192.png" />
          <ResultName>Name Here</ResultName>
        </ResultContainer>
        <ResultContainer>
          <ResultImage src="logo192.png" />
          <ResultName>Name Here</ResultName>
        </ResultContainer>
        <ResultContainer>
          <ResultImage src="logo192.png" />
          <ResultName>Name Here</ResultName>
        </ResultContainer>
      </ResultListContainer>
    </Container>
  );
}

export default App;
