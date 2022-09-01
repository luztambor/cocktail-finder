import styled from 'styled-components';
import Axios from 'axios';
import { Header, SearchBar, SearchInput } from './components/headerComponents';
import { ResultListContainer, ResultContainer, ResultImage, ResultName } from './components/resultComponents';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {

  const [timeoutId, newTimeoutId] = useState();

  const fetchRecipe = (searchQuery) => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
    .then( (response) => {
      console.log(response);
    });
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 1000);
    newTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        Cocktail Finder
      </Header>
      <SearchBar>
        <SearchInput placeholder="Search by name or ingredient..." onChange={onTextChange} />
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
