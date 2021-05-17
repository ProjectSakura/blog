import styled from "styled-components";

export const Body = styled.div`
    height:100%;
    padding:2vh;
    color:white;
    background-color:#121217;
`;

export const BodyInner = styled.div`
  margin: 20vh;
  padding: 3.5vh;
  border-radius: 10px;
  background-color: #1c1c24;
`;

export const AuthorSec = styled.div`
  margin: 20vh;
  padding: 5vh;
  border-radius: 10px;
  background-color: #1c1c24;
`;

export const Heading = styled.h1`
  color: #039be5;
`;

export const SubHeading = styled.h4`
  color: #53c497;
`;

export const Date = styled.h3`
  color: #666e72;
  font-weight:bold;

`;

export const ImgDiv = styled.p` 
  text-align:center;
  display:flex;
`;

export const Image = styled.img` 
  width: 60vw;
  height: 60vh;
`;

export const Description = styled.p` 
  font-size: 1.3em;
`;

export const UnorderedList = styled.ul` 
  font-size: 1em;
`;

export const ListItem = styled.li` 
  font-size: 1.2em;
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
