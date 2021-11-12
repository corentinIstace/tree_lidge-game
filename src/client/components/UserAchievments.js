import React from "react";
import styled from "styled-components";

const UserAchievments = () => (
    <Container>
        <p>{"USER ACHIEVMENTS"}</p>
    </Container>
);

const Container = styled.div`
    background-color: rgba(116, 150, 110, 0.8);
    border-right: 5px solid rgba(54, 198, 96, 0.8);
    border-bottom: 5px solid rgba(54, 198, 96, 0.8);
    border-top: 2px solid rgba(54, 198, 96, 0.8);
    border-left: 2px solid rgba(54, 198, 96, 0.8);
    border-radius: 45px 0px 45px 0px;
    text-align: center;
    padding-top: 20px;
    color: white;
    text-decoration: underline #ff6600;
    width: 450px;
    height: 200px;
`;
export default UserAchievments;
