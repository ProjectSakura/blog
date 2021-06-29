import styled from "styled-components";
import { Link } from "react-router-dom";

export const Body = styled.div`
    display: flex;
    height: 100%;
`;

export const ImgDiv = styled.div` 
  display: inline-flex;
  flex: 1;
`;

export const ImageTag = styled.img` 
    @media(min-width: 850px) {
        max-width: 100%;
    }
    @media(max-width: 850px) {
        max-width: 100%; 
        max-height: max-content;   
    }
    border-radius: 5px;
`;

export const ContentDiv = styled.div` 
    @media(max-width: 700px) {
        display: none;
    }
    padding: 2vh 2vh 3vh 2vh;
    flex: 1;
`;

export const Heading = styled.h2`
    @media(max-width: 850px) {
        font-size: 1.5em;
        margin-bottom: 0vh;
    }
    @media(min-width: 850px) {
        margin-bottom: 1vh;
        font-size: 1.5em;
    }
    margin-top: 1vh;
    color: #039be5;
`;
export const SubHeading = styled.div`
  @media(max-width: 850px) {
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-size:1em;
  }
  @media(min-width: 850px) {
    margin-bottom:5vh;
    margin-top: 1vh;
    font-size:1.1em;
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
    font-size: 1em;
  }
  @media(max-width: 850px) {
    padding-top: 3vh;
    font-size: 1em;
  }
`;
export const Btn = styled(Link)`
  
`;
export const Hr = styled.hr`
  @media(max-width: 765px) {
    display:none;
  }
  margin: 0;
`;
