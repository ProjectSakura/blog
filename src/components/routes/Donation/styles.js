import styled from "styled-components";

export const Body = styled.div`
    background-color: #121217;
    /* height: 100vh; */
`;
export const BodyInner = styled.div`
    height: 100vh;
    @media (max-width: 850px) {
        padding: 0vh;
    }
    @media (min-width: 850px) {
        padding: 3vh;
    }
`;
export const DonorParent = styled.div`
  @media(max-width:850px){
    flex-direction: column;
  }
  display: flex;
  flex-wrap: wrap;

`;
export const DonorChild = styled.div`
  flex: 1;
`;
export const DonorDiv = styled.div`
 @media(min-width: 850px) {
      margin: 1vh 5vh;
      display: block;
    } 
    @media(max-width: 850px) {
      /* margin: 1vh; */
      display:flex;
      flex-direction:column;
    }
    padding: 2vh;
    justify-content: center;
    border-radius:5px;
    background-color: #1c1c24;
`;
export const Image = styled.img`
  
`;
export const Span = styled.span`
  
`;
export const Heading = styled.h1`

`;
