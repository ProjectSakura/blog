import styled from "styled-components";
//semantic-ui
import { Container } from "semantic-ui-react";

export const TableData = styled.td`
    align-items: center;
    vertical-align: middle;
`;
export const ContainerDiv = styled(Container)`
    @media(min-width: 850px) {
      padding: 0vh;
      margin: auto !important;
      display: list-item !important;
      /* display: flex !important; */
      /* flex-direction:column !important; */
    } 
    @media(max-width: 850px) {
      padding: 1vh;
    }
`;
