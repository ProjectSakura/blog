import styled from "styled-components";

export const FooterBody = styled.footer`
    @media(max-width: 850px){
        justify-content: space-between;
    }
    @media(min-width: 850px){
        justify-content: space-between;
        padding: 5vh 10vh;
    }
    display: flex;
    background-color: #1c1c24;

`;
export const FooterChild = styled.div`
    padding: 2vh;
`;
export const Image = styled.img`
    @media(min-width: 850px){
        height: auto;
        width: 25vh;
    }
    @media(max-width: 850px){
        height: auto;
        width: 10vh;
    }
`;
export const FooterImage = styled.img`
    @media(min-width: 850px){
        height: auto;
        width: 25vh;
    }
    @media(max-width: 850px){
        height: auto;
        width: 10vh;
    }
`;
export const Anchor = styled.a`
    @media(min-width: 850px){
        /* display: none; */
        margin-right: 3vh;
    }
    &:hover{
        color:#039be5;
    }
    color: white;
    margin-right: 1vh;
`;
export const TagLine = styled.p`
    @media(max-width: 850px){
        display: none;
    }
    word-wrap: break-word;
    font-size: 1.2em;
    width: 50vh;
`;
export const SponsorTag = styled.h3`
    @media(max-width: 850px){
        font-size: 0.8em;
    }
`;
