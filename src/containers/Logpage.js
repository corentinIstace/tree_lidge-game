import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Login from "../client/components/Login";
import Register from "../client/components/Register";
import MySvg from "../ressources/img/tree-lidge-logo-3.svg";

const Logpage = () => {
    const [btnSwitch, setBtnSwitch] = useState(true);
    const toggleBtnSwitchOnClick = () => {
        setBtnSwitch(!btnSwitch);
    };
    if (btnSwitch === true) {
        return (
            <Container>
                <Logo src={MySvg} alt={"Tree Lidge Logo"} />
                <ContainerButtons>
                    <Link to={"/login"}>
                        <Login />
                    </Link>
                    <Link to={"/register"}>
                        <Button onClick={toggleBtnSwitchOnClick}>
                            {"Register"}
                        </Button>
                    </Link>
                </ContainerButtons>
            </Container>
        );
    }
    return (
        <Container>
            <Logo src={MySvg} alt={"Tree Lidge Logo"} />
            <ContainerButtons>
                <Link to={"/register"}>
                    <Register />
                </Link>
                <Link to={"/login"}>
                    <Button onClick={toggleBtnSwitchOnClick}>{"Login"}</Button>
                </Link>
            </ContainerButtons>
        </Container>
    );
};

export default Logpage;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: linear-gradient(red, blue);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Arial";
`;

const Logo = styled.img`
    width: 20%;
`;

const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    background-color: grey;
    color: white;
    border: none;
    width: 30vw;
    border-radius: 3px;
    margin-top: 6px;
    font-size: 20px;
    padding-bottom: 6px;
    padding-top: 6px;
    &:hover {
        transition: ease-in 0.3s;
        box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
    }
`;
