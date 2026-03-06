import {Link} from "react-router";
import styled from "styled-components";


const NavWrapper = styled.nav`
    background-color: rgba(215, 151, 214, 0.727);
    width: 30%;
    @media screen and (max-width: 1000px){
        width: 100%;
    }
    * {
        margin: 0;
        box-sizing: border-box;
    }
`;
const Ul = styled.ul`
    list-style: none;
    padding-left: 0;
    flex-direction: column;
    align-items: center;
    display: flex;
    @media screen and (max-width: 1000px){
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
`;
const Li = styled.li`
    width: 80%;
    background-color: #ffffffe3;
    padding: 10% 3%;
    margin: 8% auto;
    text-align: center;
    @media screen and (max-width: 1000px){
        flex: 1;
        padding: 0.4%;
        margin: 0.7%;
    }
`;
const StyledLink=styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: calc(2px + 1.3vw);
    
    @media screen and (max-width: 1000px){
        font-size: calc(4px + 1vw);
        display: inline-block;
        padding: 6px 10px;
    }
`;

export default function Nav() {
    return (
        <NavWrapper>
            <Ul>
                <Li><StyledLink to="/">Home</StyledLink></Li>
                <Li><StyledLink to="/education.html">Education</StyledLink></Li>
                <Li><StyledLink to="/employment.html">Employment</StyledLink></Li>
                <Li><StyledLink to="/experience.html">Experience</StyledLink></Li>
                <Li><StyledLink to="/projects.html">Projects</StyledLink></Li>
                <Li><StyledLink to="/references.html">References</StyledLink></Li>
            </Ul>
        </NavWrapper>


    )
}
