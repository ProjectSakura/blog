import styled from "styled-components";

export const Body = styled.div`
    @media(min-width: 768px) {
      padding: 2vh;
    } 
    @media(max-width: 768px) {
      padding: 1vh;
      display:flex;
      flex-direction:column;
    }
    height:100%;
    color:white;
    background-color:#121217;
`;

export const BodyInner = styled.div`
    @media(min-width: 768px) {
      margin: 10vh 20vh;
      padding: 3vh;
    } 
    @media(max-width: 768px) {
      margin: 10vh auto;
      padding: 2vh;
    }
    border-radius: 10px;
    background-color: #1c1c24;
`;

export const AuthorSec = styled.div`
    @media(min-width: 768px) {
      margin: 10vh 20vh;
      padding: 5vh;
    } 
    @media(max-width: 768px) {
      margin: 10vh auto;
      padding: 2vh;
    }
  border-radius: 10px;
  background-color: #1c1c24;
`;

export const Heading = styled.h1`
  @media(max-width: 768px) {
    margin-top: 1vh;
    font-size: 1.5em;
  }
  color: #039be5;
`;

export const SubHeading = styled.h4`
  color: #53c497;
`;

export const Date = styled.h3`
  @media(max-width: 768px) {
    margin-bottom: 0vh;
    font-size: 1em;
  }
  color: #666e72;
  font-weight:bold;
`;

export const ImgDiv = styled.p` 
  text-align:center;
`;

export const Image = styled.img` 
  width: 100%;
  height: auto;
`;

export const Description = styled.p` 
  @media(min-width: 768px) {
    font-size: 1.2em;
  } 
  @media(max-width: 768px) {
    font-size: 1em;
  }
`;

export const UnorderedList = styled.ul` 
  font-size: 1em;
`;

export const ListItem = styled.li` 
  @media(min-width: 768px) {
    font-size: 1.2em;
  } 
  @media(max-width: 768px) {
    font-size: 1em;
  }
`;

export const AuthorHead = styled.h3`
  color: #666e72;
  font-weight: 900;
  margin: 0 auto;
`;

export const AuthorSubHead = styled.h1`
  color: #039be5;
`;

export const Anchor = styled.a`
  color: cyan;
  &:hover{
    color:cyan;
  }
`;
