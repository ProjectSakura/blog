import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 900px) {
        /* display: flex; */
        height: 100%;
    }   
    @media (max-width: 900px) {
        height: 100%;
    }
    /* background-color: #121217; */
`;
export const Left = styled.div`
    @media (max-width: 900px) {
        display: none;
    }
    @media (min-width: 900px) {
        float: left;
        width: 10%;
        height: 100vh;
        padding: 2vh;
        background-color: #121217;
    }
`;
export const Mid = styled.div`
    @media (max-width: 900px) {
        height: 100%;
        /* width: 100vh; */
    }
    @media (min-width: 900px) {
        float: left;
        width: 60%;
        height: 100vh;
        
    }
    margin: auto;
    overflow-y: scroll;
    padding: 2vh;
    background-color: #090C10;
`;
export const Right = styled.div`
    @media (max-width: 900px) {
        display: none;
    }
    @media (min-width: 900px) {
        float: right;
        width: 30%;
        height: 100vh;
        /* padding: 2vh; */ 
    }   
    background-color:#121217;
`;
export const TwitterComponentContainer = styled.div`
    @media (max-width: 900px) {
        display: none;
    }
    @media (min-width: 900px) {
        margin: 3vh 5vh;
    }
`;
export const MerchBanner = styled.div`
    text-align: center;
    background-color: #3C3555;
`;
export const PCImg = styled.video`
   @media(min-width: 900px) {
        max-width: 100%;
        max-height: 30vh;
    }
    @media(max-width: 900px) {
        max-width: 100%; 
        max-height: max-content;   
    }
    border-radius: 5px;
`;
export const SponsorImage = styled.img`
    max-width: fit-content;
    height: auto;
`;
export const SponsorImgDiv = styled.div`
    text-align: center;
`;
export const Anchor = styled.a`
    text-decoration:none;
`;
export const RecentBlogComponent = styled.div`
    height: 30%;
    border-radius:10px;
    background-color: #0E0E0F;
    margin-bottom: 2vh;
    filter: drop-shadow(0 0 0.25rem #3AC0FF);
`;
export const SidebarComponent = styled.div`
    @media (max-width: 900px) {
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
    @media (min-width: 900px) {
        display: none;
    }
`;
export const NavBarDiv = styled.div`
    @media (min-width: 900px) {
        display: none;
    }
    margin-right: 0vh;
`;
export const AdvBanner = styled.div`
    /* @media (max-width: 900px) {
        display: none;
    } */
`;
