import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {Marker, CircleMarker, Popup} from "react-leaflet";
import icon from "../ressources/img/jean-victor-balin-tree.svg";
import TreePopup from "./LeafletTreePopup";
import HerokuUrl from "../HerokuUrl.js";

/**
 * Factor to adapt sizing and positionning according to zoom level
 */
const Factor = zoomLevel => {
    switch (zoomLevel) {
        case 20:
            return 3;
        case 19:
            return 2;
        case 18:
        default:
            return 1;
    }
};

// Handle timout between requests
let requestWithTimout;

/**
 * Loop over trees data and generate map markups
 */
const InBoundersMarkups = props => {
    const [Trees, setTrees] = useState(null);

    useEffect(() => {
        props.setLoadTrees(true); // Display loading message

        // Handle timout between requests
        if (requestWithTimout) {
            clearTimeout(requestWithTimout);
        }
        requestWithTimout = setTimeout(() => {
            axios
                .post(`${HerokuUrl}/trees`, {
                    bounds: {lon: props.Bounders[1], lat: props.Bounders[0]},
                    complete: props.zoomLevel < 19 ? false : true,
                })
                .then(response => {
                    console.log(props.userName, response.data);
                    props.setLoadTrees(false); // Hide loading message

                    /* if (!response.data.filter) {
                        console.log("test");
                        return [response.data];
                    }
                    console.log("display only geoloc");
                    return response.data.filter(t => t.geoloc); */
                    return response.data;
                })
                .then(trees => {
                    setTrees(trees);
                })
                .catch(error => {
                    props.setLoadTrees(false); // Hide loading message
                    console.error(
                        "error",
                        error.response ? error.response.data.message : error,
                    );
                });
            requestWithTimout = null;
        }, 1000);

        // Detect if a tree popup is open and close it before processing request.
        if (props.MyMap) {
            props.MyMap.closePopup();
        }
    }, [props.Bounders]);

    const xSize = 9 * Factor(props.zoomLevel);
    const ySize = 45 * Factor(props.zoomLevel);

    const Leaflet = window.L;
    const treeIcon = Leaflet.icon({
        iconUrl: icon,
        iconSize: [xSize, ySize], // size of the icon
        iconAnchor: [45 * (xSize / 50), 40 * (ySize / 50)], // point offset of the icon which will correspond to marker's location
        popupAnchor: [-20 * (xSize / 50), -35 * (ySize / 50)], // point offset from which the popup should open relative to the iconAnchor
    });

    /**
     * Display tree with less elements (wide view)
     */
    if (props.zoomLevel < 19) {
        return (
            <>
                {Trees ? (
                    Array.from(Trees)
                        .filter(t => t.geoloc)
                        .map(tree => (
                            <CircleMarker
                                key={tree._id}
                                color={"#00ff00"}
                                center={tree.geoloc}
                                radius={2}
                            />
                        ))
                ) : (
                    <div />
                )}
            </>
        );
    }

    return (
        <>
            {Trees ? (
                Array.from(Trees)
                    .filter(t => t.geoloc)
                    .map(tree => (
                        <Marker
                            key={tree._id}
                            position={tree.geoloc}
                            icon={treeIcon}>
                            <StyledPop>
                                <TreePopup tree={tree} />
                            </StyledPop>
                        </Marker>
                    ))
            ) : (
                <div />
            )}
        </>
    );
};

const StyledPop = styled(Popup)`
    .leaflet-popup-content-wrapper {
        background-color: lightgreen;
        width: 400px;
    }

    .leaflet-popup-tip-container {
        visibility: hidden;
    }
`;

export default InBoundersMarkups;
