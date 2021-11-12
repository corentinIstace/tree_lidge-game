import React from "react";
import styled from "styled-components";

const Register = () => (
    <section className={"container"}>
        <form>
            <div className={"userName"}>
                <label htmlFor={"userName"} />
                <div className={"control"}>
                    <Input
                        placeholder={"Username"}
                        type={"text"}
                        id={"userName"}
                    />
                </div>
            </div>
            <div className={"field"}>
                <label htmlFor={"email"} />
                <div className={"control"}>
                    <Input
                        placeholder={"Email"}
                        type={"text"}
                        id={
                            "email"
                        } /*onChange={(e) => setEmail(e.target.value)}*/
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
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className={"field"}>
                <label htmlFor={"password"} />
                <div className={"control"}>
                    <Input
                        placeholder={"Confirm Password"}
                        type={"password"}
                        id={"confirmPassword"}
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <div className={"buttons"}>
                <Button
                    className={"submit"}
                    type={"submit"}
                    onClick={() => {
                        console.log("ToDoRegister");
                    }}>
                    {"Register"}
                </Button>
            </div>
        </form>
    </section>
);

export default Register;

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
