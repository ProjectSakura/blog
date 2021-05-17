import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: auto;
    padding: 5vh;
    color: #c2d6d7;
    background-color: #1c1c24;
`;

export const Bold = styled.b`
    @media(min-width: 768px) {
      font-size: 1.2em;
    } 
    @media(max-width: 768px) {
      font-size: 1em;
    }
    color:white;
    margin: auto;
`;

export const Anchor = styled.a`
  color: cyan;
  &:hover{
    color:cyan;
  }
`;
