import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideDiv = styled.div`
    /* background-color: #1c1c24 !important; */
    margin:1vh auto;
    text-align:center;
`;
export const ImgDiv = styled.div`
`;
export const SponserImgDiv = styled.div`
    /* position: fixed; */
    height: 40vh;
    display: flex;
    align-items: flex-end;
`;
export const Image = styled.img`
    border-radius: 2em;
    margin: auto;
    width: 7vh;
    height: 7vh;
`;
export const SponsorImage = styled.img`
    /* margin: auto; */
    /* position: fixed; */
    display: block;
    max-width: 100%;
    height: auto;
    /* bottom: 0; */
`;
export const Span = styled.h6`
    margin-top:1vh;
    color: #53c497;
`;
export const LinkDiv = styled.div`
    display: grid;
    margin-top: 3vh;
`;
export const Anchor = styled.a`
    margin: 1vh auto;
    color: white;
    &:hover {
        color: #53c497;
        cursor: pointer;
    }
`;
export const NavLink = styled(Link)`
    margin: 1vh auto;
    color: white;
    &:hover {
        color: #53c497;
        cursor: pointer;
    }
`;
