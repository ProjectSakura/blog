import styled from "styled-components";

export const Container = styled.div`
    /* height: 100vh; */
    background-color: white;
`;
export const Left = styled.div`
    float: left;
    width: 10%;
    height: 100vh;
    padding: 2vh;
    background-color: red;
`;
export const Mid = styled.div`
    float: left;
    width: 60%;
    height: 100vh;
    padding: 2vh;
    background-color: blue;
`;
export const Right = styled.div`
    /* padding: 2vh; */
    float: right;
    width: 30%;
    height: 100vh;
    background: yellow;
    overflow-y: scroll;
`;
export const TwitterComponent = styled.div`
    margin: 5vh;
`;
export const RecentBlogComponent = styled.div`
    height: 30%;
    background-color: black;
`;
export const OtherBlogComponent = styled.div`
    margin-top: 2vh;
    height: auto;
    background-color: pink;
`;
