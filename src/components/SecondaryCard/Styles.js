import styled from "styled-components";
import { Link } from "react-router-dom";

export const Body = styled.div`
    @media(min-width: 850px) {
      margin: 1vh 2vh;
      display: block;
    } 
    @media(max-width: 850px) {
      margin: 0.5vh;
      max-width: max-content;
      display:flex;
      flex-direction:column;
    }
    padding: 2vh;
    border-radius:5px;
    background-color: #1c1c24;
`;
export const Heading = styled.h2`
    @media(max-width: 850px) {
        font-size: 1.5em;
        margin-bottom: 0vh;
    }
    @media(min-width: 850px) {
        font-size: 1.2em;
        margin-bottom: 1vh;
    }
    margin-top: 1vh;
    color: #039be5;
    white-space: nowrap; 
    width: 20vw; 
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const SubHeading = styled.div`
  @media(max-width: 850px) {
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-size:0.7em;
  }
  @media(min-width: 850px) {
    margin-bottom:5vh;
    margin-top: 1vh;
    font-size:1em;
  }
  display:block;
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
  @media(min-width: 850px) {
    margin: 2vh auto;
  }
  @media(max-width: 850px) {
    margin-top: 0vh;
  }
  font-size: 1em;
`;
export const Btn = styled(Link)`
  
`;
export const Hr = styled.hr`
  @media(max-width: 765px) {
    display:none;
  }
  margin: 0;
`;
