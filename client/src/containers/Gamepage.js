import React, {useState} from "react";
import styled from "styled-components";
import Map from "../components/LeafletMap";

const Gamepage = () => {
    const [userTrees, setUserTrees] = useState(0); // number of trees owned
    const [userLeaves, setUserLeaves] = useState(5000); // Number of leaves owned
    const [loadTrees, setLoadTrees] = useState(false); // Controll display of loading message

    return (
        <GameContainer>
            <Nav>
                <Button>{"Menu"}</Button>
                <Button>{"Logout"}</Button>
            </Nav>
            <Map
                userTrees={userTrees}
                setUserTrees={setUserTrees}
                userLeaves={userLeaves}
                setUserLeaves={setUserLeaves}
                setLoadTrees={setLoadTrees}
            />
            <LoadingTrees hidden={!loadTrees}>
                <i className={"fas fa-leaf"} style={{color: "darkgreen"}} />
                <LoadingTreesText>{"Requesting trees"}</LoadingTreesText>
                <i className={"fas fa-leaf"} style={{color: "darkgreen"}} />
            </LoadingTrees>
            <Counts>
                <p>
                    {"Trees : "} {userTrees}
                </p>
                <p>
                    {"Leaves : "} {userLeaves}
                </p>
            </Counts>
        </GameContainer>
    );
};
export default Gamepage;

/**
 * Main container of the current page.
 */
const GameContainer = styled.section`
    position: relative;
    width: 100%;
    background-color: yellow;
`;

/**
 * Navbar.
 */
const Nav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 90%;
    position: absolute;
    top: 10px;
    left: 5vw;
    z-index: 999;
`;

/**
 * Buttons in the navbar.
 */
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

/**
 * Informative display for the player.
 * Show number of trees and leaves owned by the player.
 */
const Counts = styled.article`
    background-color: rgba(54, 198, 96, 0.8);
    position: absolute;
    text-align: right;
    bottom: 2vh;
    right: 2vh;
    padding: 20px;
    width: 35vw;
    z-index: 999;
`;

const LoadingTrees = styled.div`
    background-color: rgba(54, 198, 96, 0.8);
    position: absolute;
    bottom: 2vh;
    left: 2vh;
    padding: 20px;
    z-index: 999;
`;

const LoadingTreesText = styled.small`
    margin: 20px;
    color: darkgreen;
`;
