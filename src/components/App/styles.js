import styled from "styled-components";
import { Loader } from "semantic-ui-react";

export const Body = styled.div`
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        src: local('Lato'), local('Lato'), url(https://fonts.gstatic.com/s/lato/v12/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2) format('woff2');
        font-display: swap;
    }
    height:100% ;
    background-color:#121217;
    color:white;
`;
export const LoaderDiv = styled(Loader)`
    background-color: white !important;
    margin-top: 30vh !important;
`;
