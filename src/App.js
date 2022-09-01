import styled from 'styled-components';
import Axios from 'axios';
import { Header, SearchBar, SearchInput } from './components/headerComponents';
import { ResultListContainer, ResultContainer, ResultImage, ResultName } from './components/resultComponents';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultComponent = (props) => {
  console.log(props);
  const {recipeObj} = props;
  return (
    <ResultContainer>
      <ResultImage src={recipeObj.strDrinkThumb} />
      <ResultName>{recipeObj.strDrink}</ResultName>
    </ResultContainer>
  );
};


function App() {

  const [timeoutId, newTimeoutId] = useState();
  const [recipeList, newRecipeList] = useState([]);

  const fetchRecipe = async (searchQuery) => {
    const response = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
    console.log(response.data.drinks);
    newRecipeList(response.data.drinks);
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
      <ResultListContainer>
        {recipeList.length &&
        recipeList.map((drinkObj) => (
        <ResultComponent recipeObj={drinkObj} />
        ))};
      </ResultListContainer>
    </Container>
  );
}

export default App;
