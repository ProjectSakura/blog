import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-content: center;
    height: fit-content;
    max-width: 100%;
    border-radius: 5px;
    background-color: #0E0E0F;
    filter: drop-shadow(0 0 0.25rem #3AC0FF);
    padding-top: 1vh;
    /* padding-bottom: 1vh; */
    margin: 3vh 5vh;
`;
export const ImgDiv = styled.div`
    flex: 1;
`;
export const ContentDiv = styled.div`
    flex:1;
    text-align: center;
    align-self: center;
    margin-right: 2vh;
`;
export const Heading = styled.p`
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 1vh;
    /* vertical-align: middle; */
`;
export const Anchor = styled.a`
    font-size: 1.3em;
    text-decoration: none;
`;
export const Image = styled.img`
    width: 100%;
    height: auto;
`;
