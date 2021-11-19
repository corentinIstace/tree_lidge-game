import React from "react";
import styled from "styled-components";
import foret from "../ressources/img/foret.png";

const LeaderboardPage = () => {
    function closeLeaderBoard() {
        window.location.href = "/gamepage";
    }

    return (
        <>
            <Page>
                <ButtonClose onClick={closeLeaderBoard}>{"X"}</ButtonClose>
                <Container>
                    <Title>{"Leaderboard"}</Title>
                </Container>
            </Page>
        </>
    );
};

export default LeaderboardPage;

const Page = styled.div`
    background-image: url(${foret});
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const ButtonClose = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    height: 24px;
    width: 24px;
    background-color: red;
    border-radius: 5px;
    :hover {
        box-shadow: 5px 5px 5px 5px black;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 80vw;
    background-color: rgba(66, 66, 66, 0.8);
`;

const Title = styled.h1`
    font-family: "Arial";
    font-size: 3rem;
    margin-top: 20px;
    text-decoration: underline;
`;
