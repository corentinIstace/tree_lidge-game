import React from "react";
import styled from "styled-components";

const Succes = () => (
    <Container>
        <p>{"SUCCES"}</p>
    </Container>
);

const Container = styled.div`
    background-color: rgba(116, 150, 110, 0.8);
    border-right: 5px solid rgba(54, 198, 96, 0.8);
    border-top: 5px solid rgba(54, 198, 96, 0.8);
    border-bottom: 2px solid rgba(54, 198, 96, 0.8);
    border-left: 2px solid rgba(54, 198, 96, 0.8);
    border-radius: 0px 45px 0px 45px;
    text-align: center;
    color: white;
    text-decoration: underline #ff6600;
    padding-top: 20px;
    width: 200px;
    height: 150px;
`;

export default Succes;
