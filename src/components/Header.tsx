import styled from "styled-components";

const HeaderWrapper = styled.header`
    position: relative;
    background-color: #ffc0e7;
    display: flex;
    flex-direction: column;
    color: black;
    padding: 1% ;
    & * {
        margin: 0;
        box-sizing: border-box;
    }
`;
const H1 = styled.h1`
    padding: 20px;
    color: black;
    text-align: left;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-color: #ffc0e7;
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
    
`;
const P1 = styled.p`
    margin-top: 0px;
    padding-left: 20px;
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

export default function Header(){
    return (

        <HeaderWrapper>
            <H1>Angelie Darbouze</H1>
            <P1>Welcome to my resume website!</P1>
        </HeaderWrapper>

    )
}