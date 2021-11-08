import React from "react";
import styled from "styled-components";

const Succes = () => (
    <Container>
        <p>{"SUCCES"}</p>
    </Container>
);

const Container = styled.div`
    background-color: rebeccapurple;
    width: 200px;
    height: 150px;
    border: 2px solid red;
`;

export default Succes;
