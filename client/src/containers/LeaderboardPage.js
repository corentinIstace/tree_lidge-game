import React from "react";
import styled from "styled-components";
import foret from "../ressources/img/foret.png";

const LeaderboardPage = () => (
    <>
        <Page>{"Salut"}</Page>
    </>
);

export default LeaderboardPage;

const Page = styled.div`
    background-image: url(${foret});
    padding: 40px 0px;
`;
