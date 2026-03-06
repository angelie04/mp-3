import styled from "styled-components";

const NavMain = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%; `;

const MainWrapper = styled.main`
    padding: 1% 2%;
    min-height: 100vh;
    text-align: center;
    width: 70%;
    height: auto;
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
const PicText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 5% 0;
    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
   
`;
const Img = styled.img`
  max-width: 40%;
`;
const Bio = styled.div`
    line-height: 1.25;
    font-size: calc(13px + 0.3vw);
    padding: 0 2%;
    @media screen and (max-width: 1000px){
        margin-right: 10px;
    }

`;

export default function Home() {
    return (
    //     main of my landing page from home page
        <>
        <title>Home | Resume </title>

    <NavMain>
            <MainWrapper>
                    <H2> Home </H2>
                <PicText>
                    <Img src="resume391.jpeg" alt="Angelie Darbouze"/>
                    {/*<TextColumn>*/}
                        <Bio> Hello! My name is <strong>Angelie Darbouze</strong>, and I am a senior at Boston University
                        studying Computer Science. In the future, I want to work in software development and web design.</Bio>
                        <Bio> This website serves as my resume to showcase my skills, projects, experiences, and more!</Bio>
                    {/*</TextColumn>*/}
                </PicText>
            </MainWrapper>
        </NavMain>
        </>
    )
}
