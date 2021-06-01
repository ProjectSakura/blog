import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    background-color: white;
`;
export const Left = styled.div`
    @media (max-width: 850px) {
        display: none;
    }
    @media (min-width: 850px) {
        float: left;
        width: 10%;
    }
    height: 100vh;
    padding: 2vh;
    background-color: #121217;
`;
export const Mid = styled.div`
    @media (max-width: 850px) {
        width: 100%;
    }
    @media (min-width: 850px) {
        float: left;
        width: 60%;
    }
    margin: auto;
    height: 100vh;
    padding: 2vh;
    background-color: #090C10;
`;
export const Right = styled.div`
    @media (max-width: 850px) {
        display: none;
    }
    @media (min-width: 850px) {
        float: right;
        width: 30%;
    }
    height: 100vh;
    background-color:#121217;
`;
export const TwitterComponent = styled.div`
    @media (max-width: 850px) {
        display: none;
    }
    @media (min-width: 850px) {
        margin: 3vh 5vh;
    }
`;
export const SponsorImg = styled.img`

`;
export const RecentBlogComponent = styled.div`
    height: 30%;
    border-radius:10px;
    background-color: #0E0E0F;
    margin-bottom: 2vh;
    filter: drop-shadow(0 0 0.25rem #3AC0FF);
`;
export const SidebarComponent = styled.div`
    @media (max-width: 850px) {
        display: none;
    }
    margin: auto;
    font-size: 1.2em;
`;
export const OtherBlogComponent = styled.div`
    margin: 2vh auto;
    height: 60%;
`;
export const FooterDiv = styled.div`
    @media (min-width: 850px) {
        display: none;
    }
`;
export const NavBarDiv = styled.div`
    @media (min-width: 850px) {
        display: none;
    }
    margin-right: 0vh;
`;
