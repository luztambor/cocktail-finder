import styled from 'styled-components';

export const ResultListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 36px;
  justify-content: space-evenly;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 16px 0;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;

export const ResultImage = styled.img`
`;

export const ResultName = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
`;