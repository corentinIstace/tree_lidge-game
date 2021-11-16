import React from "react";

const TreePopup = props => {
    const Tree = props.tree;
    return (
        <>
            {Tree.name}
            <br />
            {`Price : ${Tree.value ?? "None"}`}
            <br />
            {Tree.owner == null ? (
                <button
                    type={"button"}
                    onClick={() => {
                        console.log("Buy tree", Tree.name);
                    }}>
                    {"Buy tree"}
                </button>
            ) : (
                `Owned by ${Tree.owner}`
            )}
        </>
    );
};

export default TreePopup;
