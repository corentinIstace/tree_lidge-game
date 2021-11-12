import React from "react";
import styled from "styled-components";
import Achievements from "../client/components/Achievements";
import Succes from "../client/components/Succes";
import UserAchievments from "../client/components/UserAchievments";
import UserName from "../client/components/UserName";
import MySvg from "../ressources/img/tree-lidge-logo-3.svg";

const UserPage = () => (
    <Container>
        <Top>
            <UserName />
        </Top>
        <Middle>
            <Achievements />
            <Logo src={MySvg} alt={"logo"} />
            <Succes />
        </Middle>
        <Footer>
            <UserAchievments />
        </Footer>
    </Container>
);
const Container = styled.div`
    background: rgb(34, 193, 195);
    background: linear-gradient(
        0deg,
        rgba(34, 193, 195, 1) 0%,
        rgba(75, 152, 31, 1) 100%
    );
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    height: 50vw;
`;

const Top = styled.div`
    display: flex;
    justify-content: center;
    margin: 25px 0px;
`;

const Middle = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 50px;
`;

const Logo = styled.img`
    width: 20%;
`;
const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 25px 0px;
`;

export default UserPage;
