import styled from "styled-components";
import { Link } from "react-router-dom";

export const Body = styled.div`
    @media(min-width: 768px) {
      margin: 5vh;
      padding: 5vh;
    } 
    @media(max-width: 765px) {
      margin: 3vh;
      padding: 2vh;
      display:flex;
      flex-direction:column;
    }
  background-color: #1c1c24;
`;
export const Heading = styled.h1`
  @media(max-width: 765px) {
    margin-top: 1vh;
    margin-bottom: 0vh;
    font-size: 1.3em;
  }
  color: #039be5;
`;
export const SubHeading = styled.div`
  @media(max-width: 765px) {
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
  @media(min-width: 768px) {
    margin-bottom:5vh;
    margin-top: 1vh;
  }
  display:block;
  font-size:1em;
`;
export const LeftSection = styled.div`
  color: #53c497;
  float:left;
`;
export const RightSection = styled.div`
  color: grey;
  float:right;
`;

export const Description = styled.p`
  @media(min-width: 768px) {
    margin: 2vh auto;
  }
  @media(max-width: 765px) {
    margin-top: 0vh;
  }
  font-size: 1.2em;
`;
export const Btn = styled(Link)`
  
`;
export const Hr = styled.hr`
  @media(max-width: 765px) {
    display:none;
  }
  margin: 0;
`;
