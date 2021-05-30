import styled from "styled-components";

export const Container = styled.div`
    /* height: 100vh; */
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
    overflow-y: scroll;
`;
export const TwitterComponent = styled.div`
    margin: 5vh;
`;
export const RecentBlogComponent = styled.div`
    height: 30%;
    background-color: #1c1c24;
`;
export const SidebarComponent = styled.div`
    @media (max-width: 850px) {
        display: none;
    }
    margin: auto;
    font-size: 1.2em;
`;
export const OtherBlogComponent = styled.div`
    margin-top: 2vh;
    height: 60%;
    //overflow-y: scroll;
    /* background-color: #090C10; */
`;
export const Table = styled.table`
    table-layout: block;
    /* width: 100%; */
    //overflow-y: scroll;
`;
export const TableBody = styled.div`
    overflow-y: scroll;
`;
export const TableRow = styled.tr`
    width: 100%;
`;
export const TableData = styled.td`
    /* width: 50%; */
`;
export const FooterDiv = styled.div`
    @media (min-width: 850px) {
        display: none;
    }
`;
