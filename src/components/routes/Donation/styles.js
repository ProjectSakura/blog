import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const Body = styled.div`
    color: white;
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
export const Parent = styled.div`
  @media(max-width:850px){
    flex-direction: column;
  }
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5vh;

`;
export const Child = styled.div`
    @media(min-width: 850px) {
      margin: 2vh 10vh; 
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
export const Img = styled.img`
  border-radius: 50px;
  height: 12vh;
  width: 12vh;
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
export const Anchor = styled.a`
  &:hover{
    color: white;
    background-color: #3AC0FF;
  }
  border:1px solid #3AC0FF;
  border-radius: 5px;
  padding: 1vh;
  color: #3AC0FF;
  text-decoration: none;
`;
export const Loader = styled.div`
  @media(max-width: 850px) {
    height: 5vh;
  }
  @media(min-width: 850px) {
    height: 6vh;
  }
  max-width: 100%;
  border-radius: 50px;
  border:1px solid #3AC0FF;
  display: flex;
  margin: 2vh;
`;
export const FillLoader = styled.div`
  width: 66%;
  margin: 0;
  padding: 0;
  height: inherit;
  border-radius: 50px;
  padding: 1vh;
  background-color: #3AC0FF;
`;
export const GoalLoader = styled.div`
    text-align: right;
    width: 34%;
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
export const Btn = styled(Button)`

`;
export const MerchBanner = styled.div`
     @media(min-width: 900px) {
      margin: auto 10vh;
    }
    @media(max-width: 900px) {
      margin: auto 2vh;
    }
    text-align: center;
    background-color: #3C3555;
    
    border-radius: 5px;
`;
export const PCImg = styled.video`
    @media(min-width: 900px) {
        max-width: 100%;
        max-height: 30vh;
    }
    @media(max-width: 900px) {
        max-width: 100%; 
        max-height: max-content;   
    }
    border-radius: 5px;
`;
export const SponsorImage = styled.img`
    max-width: fit-content;
    height: auto;
`;
