import React from "react";
import styled from "styled-components";

const TreePopup = props => {
    const Tree = props.tree;
    return (
        <Container>
            <h3>{Tree.name}</h3>
            <br />
            <p>{`Price : ${Number(Tree.value).toFixed(2) ?? "?"} Leaves`}</p>
            <br />
            {Tree.owner ? `Owned by ${Tree.owner}` : `Free tree`}
            <br />
            <br />
            {
                // If tree not owned by user, display button
                Tree.owner !== props.userName && !Tree.isLocked ? (
                    <MyButton
                        type={"button"}
                        onClick={() => {
                            // TODO db request buying tree
                            console.log("Buy tree", Tree.name);
                        }}>
                        {"Buy tree"}
                    </MyButton>
                ) : // If not owned but locked
                Tree.owner !== props.userName && Tree.isLocked ? (
                    "Locked"
                ) : (
                    <MyButton
                        type={"button"}
                        onClick={() => {
                            // TODO db request buying tree
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
