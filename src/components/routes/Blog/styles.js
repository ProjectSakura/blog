import styled from "styled-components";
import { Loader } from "semantic-ui-react";

export const Body = styled.div`
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        src: local('Lato'), local('Lato'), url(https://fonts.gstatic.com/s/lato/v12/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2) format('woff2');
        font-display: swap;
    }
    @media(min-width: 768px) {
      padding: 0vh;
    } 
    @media(max-width: 768px) {
      padding: 0vh;
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
    background-color: #212433;
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
  background-color: #212433;
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
    
  }
  font-size: 1em;
  color: #666e72;
  font-weight:bold;
`;

export const Hr = styled.hr`
  border-radius: 5px;
  height: 1px;
  background-color: white; 
  margin-bottom: 2vh;
`;

export const ImgDiv = styled.p` 
  text-align:center;
`;

export const ImageTag = styled.img` 
  width: 100%;
  height: auto;
`;
export const SponsorPCImg = styled.img` 
  @media(max-width: 768px) {
    display: none;
  } 
  width: 100%;
  height: auto;
`;
export const SponsorMobImg = styled.img` 
  @media(min-width: 768px) {
    display: none;
  } 
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
  font-size: 1.3em;
  font-weight: bold;
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
export const Code = styled.div`
  padding: 2vh;
  background-color:white;
  width:100%;
  color:black;
  margin-bottom:2vh;
`;
export const CenterDiv = styled.div`
  text-align: center;
`;
export const LoaderDiv = styled(Loader)`
  margin-top: 30vh !important;
`;
