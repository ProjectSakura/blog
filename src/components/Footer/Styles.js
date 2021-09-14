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
    color:white;
`;
export const FooterChild = styled.div`
    padding: 2vh;
`;
export const Img = styled.img`
    @media(min-width: 850px){
        /* height: auto;
        width: 25vh; */
        width: 160px;
        height: 70px;
    }
    @media(max-width: 850px){
        /* height: auto;
        width: 10vh; */
        width: 120px;
        height: 60px;
    }
`;
export const FooterImage = styled.img`
    @media(min-width: 850px){
        /* height: auto;
        width: 25vh; */
        width: 160px;
        height: 60px;
    }
    @media(max-width: 850px){
        /* height: auto;
        width: 10vh; */
        width: 120px;
        height: 45px;
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
    font-size: 1.1em;
    width: 50vh;
`;
export const SponsorTag = styled.h3`
    @media(max-width: 850px){
        font-size: 0.9em;
    }
`;
