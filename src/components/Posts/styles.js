import styled from "styled-components";

export const Parent = styled.div`
  @media(max-width:850px){
    flex-direction: column;
  }
  display: flex;
  flex-wrap: wrap;

`;
export const Child = styled.div`
  flex: 1;
`;
