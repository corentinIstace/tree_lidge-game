import React from "react";
import styled from "styled-components";

const TreePopup = props => {
    const Tree = props.tree;
    return (
        <Container>
            <h2>{`${Tree.name}`}</h2>
            <h4>
                {Tree.owner ? `Owned by ${Tree.owner.UserName}` : `Free tree`}
            </h4>
            <p>
                {`Price : ${
                    Tree.value ? Number(Tree.value).toFixed(2) : "?"
                } Leaves`}
            </p>
            <br />
            {
                // If tree not owned by user, display button
                (String(Tree.owner) !== String(props.userName) &&
                    String(Tree.isLocked).toLowerCase() === "false") ||
                !Tree.id_owner ? (
                    <MyButton
                        type={"button"}
                        onClick={() => {
                            // TODO db request buying tree
                            console.log("Buy tree", Tree.name);
                        }}>
                        {"Buy tree"}
                    </MyButton>
                ) : // If not owned but locked
                Tree.owner !== props.userName &&
                  String(Tree.isLocked).toLowerCase() === "true" ? (
                    "Locked"
                ) : (
                    <MyButton
                        type={"button"}
                        onClick={() => {
                            // TODO db request lock tree
                            console.log("Lock tree", Tree.name);
                        }}>
                        {"Lock tree"}
                    </MyButton>
                )
            }
        </Container>
    );
};

export default TreePopup;

const Container = styled.div`
    margin: 0;
    padding: 0;
`;

const MyButton = styled.button`
    background-color: rgba(54, 198, 96, 0.8);
    border: none;
    border: solid 1 darkblue;
    border-radius: 5px;
    font-size: 1.2em;
    padding: 20px;

    :hover {
        -webkit-transform: scale(1.05); /* Safari et Chrome */
        -moz-transform: scale(1.05); /* Firefox */
        -ms-transform: scale(1.05); /* Internet Explorer 9 */
        -o-transform: scale(1.05); /* Opera */
        transform: scale(1.05);
        text-decoration: underline;
    }
`;
