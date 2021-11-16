import React from "react";

const TreePopup = props => {
    const Tree = props.tree;
    return (
        <>
            <b>{Tree.name}</b>
            <br />
            <p>{`Price : ${Number(Tree.value).toFixed(2) ?? "?"} Leaves`}</p>
            <br />
            <br />
            {Tree.owner ? `Owned by ${Tree.owner}` : `Free tree`}
            <br />

            {
                // If tree not owned by user, display button
                Tree.owner !== props.userName && !Tree.isLocked ? (
                    <button
                        type={"button"}
                        onClick={() => {
                            // TODO db request buying tree
                            console.log("Buy tree", Tree.name);
                        }}>
                        {"Buy tree"}
                    </button>
                ) : // If not owned but locked
                Tree.owner !== props.userName && Tree.isLocked ? (
                    "Locked"
                ) : (
                    <button
                        type={"button"}
                        onClick={() => {
                            // TODO db request buying tree
                            console.log("Lock tree", Tree.name);
                        }}>
                        {"Lock tree"}
                    </button>
                )
            }
        </>
    );
};

export default TreePopup;
