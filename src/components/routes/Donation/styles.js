import styled from "styled-components";

export const Body = styled.div`
    background-color: #121217;
    height: 100%;
`;
export const BodyInner = styled.div`
    /* height: 100%; */
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
  margin-bottom: 5vh;

`;
export const DonorChild = styled.div`
    @media(min-width: 850px) {
      margin: 2vh 5vh; 
      /* display: block;  */
    } 
    @media(max-width: 850px) {
      margin: 3vh 3vh; 
    }
    padding: 2vh;
    /* justify-content: center; */
    text-align: center;
    border-radius:5px;
    background-color: #1c1c24;
    flex: 1;
    filter: drop-shadow(0 0 0.25rem #3AC0FF);
`;
export const Image = styled.img`
  border-radius: 50px;
  height: 10vh;
  width: 10vh;
`;
export const Heading = styled.h1`
  @media(max-width: 850px) {
    font-size: 1.2em;
  }
  @media(min-width: 850px) {
    font-size: 1.5em;
  }
  text-align: center;
`;
export const SubHeading = styled.code`

`;
export const Loader = styled.div`
  max-width: 100%;
  height: 5vh;
  border-radius: 50px;
  border:1px solid #3AC0FF;
  display: flex;
  margin: 2vh;
`;
export const FillLoader = styled.div`
  width: 33%;
  margin: 0;
  padding: 0;
  height: inherit;
  border-radius: 50px;
  padding: 1vh;
  background-color: #3AC0FF;
`;
export const GoalLoader = styled.div`
    text-align: right;
    width: 77%;
    padding: 1vh;
`;
export const Hr = styled.hr`
  color: #dae1e7;
  border-style: none;
  width: 5%;
  border-top-style: dotted;
  border-width: thick;
  /* margin: 50px auto; */
`;
