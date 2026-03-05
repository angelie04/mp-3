import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import Employment from "./components/mains/Employment.tsx";
import Experience from "./components/mains/Experience.tsx";
import Projects from "./components/mains/Projects.tsx";
import References from "./components/mains/References.tsx";
import styled from "styled-components";


const PageWrapper = styled.main`
    width: 80vw;
    margin: 0 auto;
    background-color: rgba(245, 185, 244, 0.402);
`;
const StyledContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;
function Root(){
  return (
      <>
          <PageWrapper>
        <Header/>
              <StyledContainer>
        <Nav/>
        <Routes>
          <Route
              path={`/`}
              element={<Home/>}
          />
          <Route
              path={`/education.html`}
              element={<Education/>}
          />
          <Route
              path={`/employment.html`}
              element={<Employment/>}
          />
          <Route
              path={`/experience.html`}
              element={<Experience/>}
          />
          <Route
              path={`/projects.html`}
              element={<Projects/>}
          />
          <Route
              path={`/references.html`}
              element={<References/>}
          />
        </Routes>
              </StyledContainer>
        <Footer/>
          </PageWrapper>
      </>
  )
}

const router = createBrowserRouter(
    [{path:"*",Component:Root}]
)

export default function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
