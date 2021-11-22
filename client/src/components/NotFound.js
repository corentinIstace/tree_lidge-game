import React from "react";
import styled from "styled-components";
import error404 from "../ressources/img/error404.png";
import TreeError404 from "../ressources/img/TreeError404.jpg";

const NotFound = () => (
    <Container>
        <Background />
        <Error404>
            <Error404Img src={error404} alt={"Error 404"} />
            {"Page not found... Maybe doesn't exist (yet)?"}
        </Error404>
    </Container>
);

export default NotFound;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Background = styled.div`
    background-image: url(${TreeError404});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    background-attachment: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -10;
`;

const Error404 = styled.div`
    color: #f5413b;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    text-shadow: -0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 -0.5px white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;

const Error404Img = styled.img`
    width: 10rem;
    margin-bottom: 2rem;
`;
