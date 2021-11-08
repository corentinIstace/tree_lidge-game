import React from "react";
import styled from "styled-components";
import Achievments from "../client/components/Achievments";
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
            <Achievments />
            <Logo src={MySvg} alt={"logo"} />
            <Succes />
        </Middle>
        <Footer>
            <UserAchievments />
        </Footer>
    </Container>
);
const Container = styled.div`
    background-color: #111824;
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
