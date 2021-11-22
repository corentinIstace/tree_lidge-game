import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import foret from "../ressources/img/foret.png";

const Homepage = () => {
    const navigate = useNavigate();
    function returnGamepage() {
        navigate("/gamepage");
    }
    return (
        <>
            <Page>
                <ButtonClose onClick={returnGamepage}>
                    {"Back on the game !"}
                </ButtonClose>
                <ContainerTitle>
                    <Title>{"Tree Lidge"}</Title>
                </ContainerTitle>
                <Wrapper>
                    <Tile>{"Leader board"}</Tile>
                    <Tile>{"Profile"}</Tile>
                    <Tile>{"Success"}</Tile>
                    <Tile>{"Challenges"}</Tile>
                </Wrapper>
            </Page>
        </>
    );
};

export default Homepage;

const Page = styled.div`
    background-image: url(${foret});
    padding: 40px 0px;
`;
const ButtonClose = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    border-radius: 5px;
    margin-top: 5px;
    margin-left: 5px;
    :hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`;
const ContainerTitle = styled.div`
    background-color: rgba(54, 198, 96, 0.8);
    width: max-content;
    margin-right: auto;
    margin-left: auto;
    padding: 0px 20px;
    border-radius: 5px;
`;
const Title = styled.h1`
    color: black;
    /**
  * Fixed title sizes for desktop
  */
    @media only screen and (min-width: 768px) {
        font-size: 4em;
    }
`;

const Wrapper = styled.section`
    display: flex;
    flex-flow: row wrap;
    /**
  * Fit components in wrapper from their sizes (grid of 4 buttons)
  * Total width   =   width * 2 +   margin * 4
  * Mobile : 80vw =   30vw  * 2 +   5vw    * 4
  * Desktop : 600px = 150px * 2 +   75px   * 4
  */
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    /**
  * Fixed sizes for desktop
  */
    @media only screen and (min-width: 768px) {
        width: 600px;
    }
`;

const Tile = styled.button`
    background-color: rgba(116, 150, 110, 0.8);
    width: 30vw;
    height: 40vw;
    margin: 2.5vw;
    margin-left: 5vw;
    margin-right: 5vw;
    border-radius: 5px;
    border: solid 1px green;
    font-size: 5vw;

    :hover {
        -webkit-transform: scale(1.05); /* Safari et Chrome */
        -moz-transform: scale(1.05); /* Firefox */
        -ms-transform: scale(1.05); /* Internet Explorer 9 */
        -o-transform: scale(1.05); /* Opera */
        transform: scale(1.05);
        text-decoration: underline;
    }

    /**
  * Fixed buttons sizes for desktop
  */
    @media only screen and (min-width: 768px) {
        font-size: 1.5em;
        width: 150px;
        height: 200px;
        margin: 30px;
        margin-left: 75px;
        margin-right: 75px;
    }
`;
