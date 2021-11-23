import React, {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {HerokuUrl} from "../HerokuUrl";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function loginOnClick() {
        setErrorMessage("");
        try {
            const loggedIn = await axios.post(`${HerokuUrl}/login`, {
                email,
                password,
            });
            if (loggedIn) {
                navigate("/gamepage");
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

    return (
        <>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <section className={"container"}>
                <form>
                    <div className={"field"}>
                        <label htmlFor={"email"} />
                        <div className={"control"}>
                            <Input
                                placeholder={"Email"}
                                type={"text"}
                                id={"email"}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className={"field"}>
                        <label htmlFor={"password"} />
                        <div className={"control"}>
                            <Input
                                placeholder={"Password"}
                                type={"password"}
                                id={"password"}
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className={"buttons"}>
                        <Button
                            className={"submit"}
                            type={"submit"}
                            onClick={loginOnClick}>
                            {"Login"}
                        </Button>
                    </div>
                </form>
            </section>
        </>
    );
}

const ErrorMessage = styled.h3`
    color: white;
`;

const Button = styled.button`
    background-color: #82c23e;
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

const Input = styled.input`
    width: 30vw;
    padding-right: 0px; /* top | right | bottom | left */
    padding-left: 0px;
    padding-top: 6px;
    padding-bottom: 6px;
    border: none;
    border-radius: 3px;
    margin-top: 6px;
`;

export default Login;
