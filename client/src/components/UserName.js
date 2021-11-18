import React from "react";
import styled from "styled-components";

const UserName = () => (
    <Container>
        <p>{"hello Name"}</p>
    </Container>
);

const Container = styled.div`
    background-color: rgba(116, 150, 110, 0.8);
    border-right: 5px solid rgba(54, 198, 96, 0.8);
    border-bottom: 5px solid rgba(54, 198, 96, 0.8);
    border-top: 2px solid rgba(54, 198, 96, 0.8);
    border-left: 2px solid rgba(54, 198, 96, 0.8);
    border-radius: 60px 10px 60px 10px;
    justify-content: center;
    text-align: center;
    color: white;
    text-decoration: underline #ff6600;
    padding-top: 40px;
    width: 200px;
    height: 100px;
`;
export default UserName;
