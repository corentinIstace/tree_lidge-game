import React from "react";
import styled from "styled-components";
import map from "../ressources/img/map.png";

const Gamepage = () => (
    <GameContainer>
        <Nav>
            <Button>{"Menu"}</Button>
            <Button>{"Logout"}</Button>
        </Nav>
        <Counts>
            <p>{"Trees : 40"}</p>
            <p>{"Leaves : 5000"}</p>
        </Counts>
    </GameContainer>
);

export default Gamepage;

const GameContainer = styled.section`
    background-image: url(${map});
    background-size: cover;
    position: relative;
    width: 100%;
    height: 100vh;
`;

const Nav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
`;

const Button = styled.button`
    background-color: rgba(54, 198, 96, 0.8);
    border: none;
    border: solid 1 darkblue;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 20px;

    :hover {
        -webkit-transform: scale(1.05); /* Safari et Chrome */
        -moz-transform: scale(1.05); /* Firefox */
        -ms-transform: scale(1.05); /* Internet Explorer 9 */
        -o-transform: scale(1.05); /* Opera */
        transform: scale(1.05);
        text-decoration: underline;
    }
`;

const Counts = styled.article`
    background-color: rgba(54, 198, 96, 0.8);
    position: absolute;
    text-align: right;
    bottom: 2vh;
    right: 2vh;
    padding: 15px;
    width: 10vw;
`;
