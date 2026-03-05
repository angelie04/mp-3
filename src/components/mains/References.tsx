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

const ReferenceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-align: center;
    flex-wrap: wrap;
    gap: 20px;
    
    .college-ref, .personal-ref {
        flex: 1 1 45%;
        /* two columns, each takes 45% and can shrink. */
        box-sizing: border-box;
        
    }
   
    h3 {
        font-size: calc(15px + 0.3vw);
        margin-bottom: 10px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    
    }
    p {
        border: 5px solid #ffc0e7;
        padding: 10px;
        margin: 50px;
    }
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 12px;
    }
    @media screen and (max-width: 1000px) {
        .college-ref, .personal-ref {
            width: 100%;
        }
    }
`;

export default function References(){
    return (
        <NavMain>
            <Main>
                <H2> My References </H2>
                <ReferenceContainer>
                    <div className="college-ref">
                        <h3> College & Professional</h3>
                        <p><strong>David Sullivan</strong> - Professor at Boston University
                            <br/> Email: dgs@bu.edu
                        </p>
                        <p>
                            <strong>Christine Papadakis-Kanaris</strong> - Professor at Boston University
                            <br/> Email: cpk@bu.edu
                        </p>
                        <p>
                            <strong>Aaron Stevens</strong> - Professor at Boston University
                            <br/> Email: azs@bu.edu
                        </p>
                    </div>
                    <div className="personal-ref">
                        <h3> Personal</h3>
                        <p><strong>Dianne Darbouze</strong> - Mother
                            <br/> Email: dahalr66@yahoo.com
                        </p>
                        <p><strong>Nolens Darbouze </strong> - Father
                            <br/> Email: nolensd@hotmail.com
                        </p>
                    </div>
                </ReferenceContainer>
            </Main>
        </NavMain>
    )
}