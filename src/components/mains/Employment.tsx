import {Link} from "react-router";
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
    // styling for all of main
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
const EmploymentContainer = styled.div`
    text-align: left;`;

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
export default function Employment() {
    return (
        <NavMain>
            <Main >
                <H2> My Employment </H2>
                <EmploymentContainer >
                    <H3>Wayfair</H3>
                    <P1 ><strong>Title: </strong>Software Engineer Intern
                        <br/> <strong>Dates: </strong> June 2025 - August 2025
                        <br/> <strong> Location: </strong> Boston, MA
                        <br/> <Link to="/experience.html" >Learn more</Link>
                    </P1>

                    <P1><strong>Title: </strong>Software Engineer Intern
                        <br/> <strong>Dates: </strong> June 2024 - August 2024
                        <br/> <strong> Location: </strong> Boston, MA
                        <br/> <Link to="/experience.html" >Learn more</Link>

                    </P1>
                </EmploymentContainer>
            </Main>
        </NavMain>
    )
}
