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
const ExperienceContainer = styled.div`
    text-align: left;
    //copied CSS from mp-1, learned a different (simpler) way to styling compared
    // to employments and education tsx files
    h3 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        margin-top: 50px;
        font-size: calc(16px + 0.3vw);
        border-left: 3px solid #ffc0e7;
        padding: 10px;
        margin-bottom: 0px;
    }
    p {
        font-size: calc(13px + 0.3vw);
        padding: 10px;
    }
    .title {
        font-size: calc(12px + 0.3vw);
        margin-top: 0px;
        padding-left: 10px;
    }
    ul {
        list-style-type: square;
        padding-left: 1.2em;
        margin: 0;
    }
    ul li {
        margin: 0 0 8px 0;
        padding: 0;
    }
    ul li p {
        margin: 0;
        padding: 5px;
    }
`;

export default function Experience() {
    return (
        <>
        <title>Experience | Resume </title>

    <NavMain>
        <Main >
            <H2> My Experience </H2>
            <ExperienceContainer>
                <h3>Software Engineer Intern @Wayfair</h3>
                <p className="title">Shipping and Delivery Experiences Team; June 2025 - August 2025</p>
                <ul>
                    <li>
                        <p> Leveraged AI tools like GitHub Copilot to analyze repositories within Wayfair, <br/>
                            while identifying critical gaps in automated test coverage. Later produced
                            a detailed <br/> report with actionable recommendations for the future.
                        </p>
                    </li>
                    <li>
                        <p>
                            Optimized GraphQl queries in Apollo Studio to retrieve large appliance service data from
                            <br/>
                            production databases, utilizing fragments to enhance code reusability and
                            maintainability.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrated end-to-end Playwright tests for a new Large Appliance UI component, helping
                            to
                            <br/>
                            validate the functionality and reliability within a Storybook environment.
                        </p>
                    </li>
                    <li>
                        <p>
                            Participated in <Link to=" https://www.youtube.com/watch?v=wtI6v7HlieQ">Wayfair’s Intern
                            Innovation Project</Link> for the second time where we
                            collaborated <br/>
                            as a group to close the gap between Wayfair’s current culture and the evolving needs of
                            <br/>
                            college students/young adults.
                        </p>
                    </li>
                </ul>
                <h3>Software Engineer Intern @Wayfair</h3>
                <p id="title">Add On Services Team; June 2024 - August 2024</p>
                <ul>
                    <li>
                        <p>
                            Developed and implemented new pages on Wayfair’s Marketplace to help suppliers more
                            efficiently<br/>
                            navigate where to ship their products to warehouses, thus making delivery services 43%
                            faster.
                        </p>
                    </li>
                    <li>
                        <p>
                            Engaged in networking with teams within the organization to better understand the
                            end-to-end
                            process.
                        </p>
                    </li>
                    <li>
                        <p>
                            Participated in Wayfair’s Intern Innovation Project where we collaborated as a group to
                            come
                            up with <br/>
                            new ideas where AI can better assist Wayfair in the future.
                        </p>
                    </li>
                    <li>
                        <p>
                            Obtained proficient skills in setting up Dev and Test environments using tools such as a
                            WebPHP8 server<br/>
                            and Google Cloud Platform (GCP).
                        </p>
                    </li>
                </ul>
                <h3> Hack Diversity </h3>
                <p id="title">Hack Fellow; January 2023 – August 2024</p>
                <ul>
                    <li>
                        <p>
                            Providing technical support and advanced development to enhance a web application for
                            doctors, improving <br/>
                            efficiency in accessing and tracking patient information.
                        </p>
                    </li>
                    <li>
                        <p>
                            Participated in a group project where I gained full-stack technical skills in MongoDB,
                            Express, React, and <br/>
                            Node.js, elevating proficiency for future web application development.
                        </p>
                    </li>
                </ul>
            </ExperienceContainer>
        </Main>
        </NavMain>
            </>
    )
}