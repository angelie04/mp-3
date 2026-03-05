import {Link} from "react-router";
import styled from "styled-components";


const FooterWrapper = styled.footer`
    background-color: #ffc0e7;
    text-align: center;
    padding: 15px;
    font-size: calc(10.5px + 0.3vw);
    position: relative;
    & * {
        margin: 0;
        box-sizing: border-box;
    }
`;

export default function Footer() {
    return(
    //    return footer from mp-1
        <FooterWrapper>
            <p>All Rights Reserved by Angelie Darbouze <Link to=""> Credits</Link> &#169;</p>
        </FooterWrapper>

    )
}