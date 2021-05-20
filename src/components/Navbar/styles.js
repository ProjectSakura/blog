import { Dropdown, Menu } from "semantic-ui-react";
import styled from "styled-components";

export const Image = styled.img`
    border-radius: 2em;
    width: 6vh;
    height: 6vh;
`;
export const NavMenu = styled(Menu)`
    background-color: #1c1c24 !important;
    padding: 1vh 2vh !important;
`;
export const NavMenuItem = styled(Menu.Item)`
    @media (max-width: 768px) {
        display: none !important;
    }
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    font-size: 1.2em;
    color: white !important;
    &:hover {
        color: #53c497 !important;
        cursor: pointer;
    }
`;
export const DropDown = styled(Dropdown)`
    @media (max-width: 768px) {
        display: block !important;
    }
    display: none !important;
    color: white !important;
    font-size: 1.2em !important;
`;
export const DropDownMenu = styled(Dropdown.Menu)`

`;
export const DropDownItem = styled(Dropdown.Item)`
    
`;
