import styled from "styled-components";
import { Link } from "react-router-dom";
import BgImg from "../../images/blogs/recent.webp";

export const Body = styled.div`
    @media(max-width: 900px) {
      display: none;
        /* max-width: 100%; 
        max-height: max-content;    */
    }
    display: flex;
    height: 100%; 
    border-radius:10px;
    border: 2px solid #3AC0FF;
    /* filter: drop-shadow(0 0 0.25rem #3AC0FF); */
`;

export const ImgDiv = styled.div` 
  flex: 1;
  background-image: url(${BgImg});
  background-size: cover;
  background-position: center;
  border-radius:10px;
`;
export const ImageTag = styled.img` 
    @media(min-width: 900px) {
        display: none;
    }
    @media(max-width: 900px) {
      display: none;
        /* max-width: 100%; 
        max-height: max-content;    */
    }
    border-radius: 5px;
`;
export const ContentDiv = styled.div` 
    @media(max-width: 900px) {
      display: none;
    }
    padding: 2vh 2vh 3vh 2vh;
    flex: 1;
    height: inherit;
`;

export const Heading = styled.h2`
    @media(max-width: 900px) {
        font-size: 1.5em;
        margin-bottom: 0vh;
    }
    @media(min-width: 900px) {
        margin-bottom: 1vh;
        font-size: 1.5em;
    }
    margin-top: 1vh;
    color: #039be5;
`;
export const SubHeading = styled.div`
  @media(max-width: 900px) {
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-size:1em;
  }
  @media(min-width: 900px) {
    margin-bottom:5vh;
    margin-top: 1vh;
    font-size:1.2em;
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
  @media(min-width: 900px) {
    margin: 2vh auto;
    font-size: 1.3em;
  }
  @media(max-width: 900px) {
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
