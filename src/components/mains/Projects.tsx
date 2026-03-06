import {Link} from "react-router";
import styled from "styled-components";
import {useState} from "react";


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
    min-width: 0;
    @media screen and (max-width: 1000px){
        width: 100%;
        min-height: 100vh;
        height: auto;
        flex-direction: column;
    }
    & * {
        margin: 15px 0;
        padding-top: 10px;
    }
    
`;
const H2 = styled.h2`
  text-align: center;
  font-size: calc(15px + 0.3vw);
  padding-top: 20px;
`;

const ProjectContainer = styled.div`
  text-align: left;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

  p {
    font-family: auto;
    font-size: calc(13px + 0.3vw);
    text-align: center;
  }
    h3 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        margin-top: 50px;

    }
`;

const Calculator = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const Label = styled.label`
  font-weight: bold;
  margin: 10px;
  padding: 1px;
  text-align: center;
    @media screen and (max-width: 1000px){
        margin: 6px 0 2px 0;
        text-align: left;
    }
`;

const Input = styled.input`
  max-width: 100px;
  background-color: #d9b9cd79;
  border: 1px solid #ea18b2cc;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const Button = styled.button`
  border:  #ffc0e7;
  padding: 8px 12px;
  margin-right: 5px;
  color: #ea18b2cc;
  font-weight: bold;
`;

export default function Projects (){
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);

    const outputColor = output < 0 ? "red" : "black";

    function doAdd(){
        setOutput(Number(input1)+Number(input2));
    }
    function doSubtract(){
        setOutput(Number(input1)-Number(input2));
    }
    function doMultiply(){
        setOutput(Number(input1)*Number(input2));
    }
    function doDivide() {
        setOutput(Number(input1)/Number(input2));
    }
    function doPower(){
        let ans = 1;
        for (let i = 0; i < Number(input2); i++) {
            ans *= Number(input1);
        }
        setOutput(ans);
    }
    function doClear(){
        setInput1("");
        setInput2("");
        setOutput(0);
    }
    return (
        <>
        <title>Projects | Resume </title>
    <NavMain>
            <Main>
                <H2> My Projects </H2>
               <ProjectContainer>
                    <h3>Project 1:</h3>
                    <p> During my freshman year of college, in CS111, I developed a multiplayer <Link to="https://github.com/angeliedarb/Chess-game">Chess</Link> and <Link to="https://github.com/angeliedarb/ConnectFourGame">Connect Four</Link> game in Python.
                    </p>
               </ProjectContainer>
                <ProjectContainer>
                    <h3>Project 2:</h3>
                    <p> Sophmore year, I developed and implemented a <Link to=" https://github.com/angeliedarb/BostonUshipping">streamlined process</Link> leveraging data analysis and cost modeling to optimize ordering
                        and shipping operations for Barnes & Noble, resulting in a 30%
                        reduction in total costs and improved supply chain
                        efficiency.
                    </p>
                </ProjectContainer>
                <ProjectContainer>
                    <h3>Project 3:</h3>
                    <p> For my senior year, in my web development course, I created many
                        websites using the Django framework. This ranged from a mini instagram
                        to creating a mobile application. You can check out all of my websites <Link to="https://github.com/angelie04/cs412">here</Link>.
                    </p>
                </ProjectContainer>
                <Calculator>
                    <Label  htmlFor="first"> First number:</Label>
                    <Input
                        id={`first`}
                        value={input1}
                        placeholder={`Enter a number`}
                        onChange={(e)=>setInput1(e.target.value)}/>
                    <Label htmlFor="second"> Second number:</Label>
                    <Input
                        id={`second`}
                        value={input2}
                        placeholder={`Enter a number`}
                        onChange={(e)=>setInput2(e.target.value)}/>
                </Calculator>
                <br/>
                <Button onClick={doAdd}>+</Button>
                <Button onClick={doSubtract}>-</Button>
                <Button onClick={doMultiply}>*</Button>
                <Button onClick={doDivide}>/</Button>
                <Button onClick={doPower}>**</Button>
                <Button onClick={doClear}>Clear</Button>
                <br/>
                <Label style={{ color: outputColor }}>
                    {output}</Label>
            </Main>
        </NavMain>
        </>
    )
}