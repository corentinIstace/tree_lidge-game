import axios from "axios";
import React, {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import HerokuUrl from "../HerokuUrl";

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    console.log(email, username, password, passwordVerify);

    async function registerOnClick() {
        setErrorMessage("");
        try {
            const Registered = await axios.post(`${HerokuUrl}/register`, {
                email,
                username,
                password,
                passwordVerify,
            });
            if (Registered) {
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

                    <div className={"username"}>
                        <label htmlFor={"username"} />
                        <div className={"control"}>
                            <Input
                                placeholder={"Username"}
                                type={"text"}
                                id={"username"}
                                onChange={event =>
                                    setUsername(event.target.value)
                                }
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
                    <div className={"field"}>
                        <label htmlFor={"passwordVerify"} />
                        <div className={"control"}>
                            <Input
                                placeholder={"Confirm Password"}
                                type={"password"}
                                id={"passwordVerify"}
                                onChange={event =>
                                    setPasswordVerify(event.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className={"buttons"}>
                        <Button
                            className={"submit"}
                            type={"submit"}
                            onClick={registerOnClick}>
                            {"Register"}
                        </Button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Register;

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
    /* top | right | bottom | left */
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 6px;
    padding-bottom: 6px;
    border: none;
    border-radius: 3px;
    margin-top: 6px;
`;
