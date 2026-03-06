import styled from "styled-components";

const NavMain = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%; `;
const Main = styled.main`
    padding: 1% 2%;
    min-height: 100vh;
    text-align: center;
    width: 70%;
    height: auto;
    & * {
        margin: 15px 0;
        padding-top: 10px;
    }
    @media screen and (max-width: 1000px){
        width: 100%;
        min-height: 100vh;
        height: auto;
        flex-direction: column;
    }
`;
const H2 = styled.h2`
    text-align: center;
    font-size: calc(15px + 0.3vw);
    padding-top: 20px;
`;
const EducationContainer = styled.div`
    text-align: left;
    
`;
const H3 = styled.h3`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-top: 50px;
`;
const P1 = styled.p`
    border-left: 3px solid #ffc0e7;
    padding-left: 20px;
    padding-bottom: 10px;
    font-size: calc(13px + 0.3vw);
`;
export default function Education() {
    return (
        <>
        <title>Education | Resume </title>
    <NavMain>
            <Main>
                <H2> My Education </H2>
                <EducationContainer>
                    <H3> Institute for Collaborative Education </H3>
                    <P1> High School Diploma <br/> Graduation: June 2022</P1>
                    <H3> Boston University </H3>
                    <P1> Bachelors Degree in Computer Science <br/> Graduation: May 2026</P1>
                </EducationContainer>
            </Main>
        </NavMain>
        </>
)
}