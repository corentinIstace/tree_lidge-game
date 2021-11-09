import React from "react";
import styled from "styled-components";

const NotFound = () => (
    <Error404>{"Page not found... Maybe doesn't exist (yet)?"}</Error404>
);

export default NotFound;

const Error404 = styled.h1`
    background-color: white;
    color: red;
    font-size: 4rem;
`;
