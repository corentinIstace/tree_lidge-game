import React from "react";
import styled from "styled-components";

const Homepage = () => (
    <>
        <Title>{"Tree Lidge"}</Title>
        <Wrapper>
            <Tile>{"Leader board"}</Tile>
            <Tile>{"Profile"}</Tile>
            <Tile>{"Success"}</Tile>
            <Tile>{"Challenges"}</Tile>
        </Wrapper>
    </>
);

export default Homepage;

const Title = styled.h1`
    margin-top: 75px;
    width: max-content;
    margin-right: auto;
    margin-left: auto;
    background-color: #a53131;
    color: black;
    font-size: 10vw;

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
    background-color: #d9ff00;
    transform: translateY(2vh);

    /**
  * Fixed sizes for desktop
  */
    @media only screen and (min-width: 768px) {
        width: 600px;
    }
`;

const Tile = styled.button`
    background-color: #2f00ff;
    width: 30vw;
    height: 40vw;
    margin: 2.5vw;
    margin-left: 5vw;
    margin-right: 5vw;
    border-radius: 5px;
    border: solid 1px green;
    font-size: 5vw;

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
