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
    /* background-color: gray !important; */
`;
export const DropDownItem = styled(Dropdown.Item)`
    /* background-color: gray !important;    */
`;

// export const MenuItem = styled.span`
//     @media (max-width: 768px) {
//         display: none;
//     }
//     font-size: 1.2em;
//     margin: auto 2vh;
// `;

// export const DropDown = styled(Dropdown)`
//     @media (max-width: 768px) {
//         display: flex !important;
//         flex-direction: column;
//     }
//     font-size: 1.5em !important;
//     display: none !important;

// `;
// export const DropDownMenu = styled(Dropdown.Menu)`

// `;
// export const DropDown = styled.ul`
//     float: right;
//     background-color: #1C1C24;
//     list-style: none;
// 	margin: 0;
// 	padding-left: 0;
// `

// export const DropDownItem = styled.li`
//     color: #fff;
//     background: #1C1C24;
// 	display: block;
// 	float: left;
// 	padding: 1rem;
// 	position: relative;
// 	text-decoration: none;
//     transition-duration: 0.5s;
//     &:hover,:focus-within {
//         background: red;
//         cursor: pointer;
//     }
// `;

// export const DropDownGroup = styled.ul`
//     background: orange;
// 	visibility: hidden;
//     opacity: 0;
//     min-width: 5rem;
// 	position: absolute;
//     transition: all 0.5s ease;
//     margin-top: 1rem;
// 	left: 0;
//     display: none;
//     &:hover,:focus{
//         visibility: visible;
//         opacity: 1;
//         display: block;
//     }
// `;
// export const DropDownHeading = styled.li`

// `;
// export const DropDownMenu = styled.ul`
//     &:hover ${DropDownGroup}{
//         visibility: visible;
//         opacity: 1;
//         display: block;
//     }
// `;
