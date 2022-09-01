import styled from 'styled-components';
import { Header, SearchBar, SearchInput } from './components/headerComponents';
import { ResultListContainer, ResultContainer, ResultImage, ResultName } from './components/resultComponents';

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
