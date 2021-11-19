import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {Marker, CircleMarker, Popup} from "react-leaflet";
import icon from "../ressources/img/jean-victor-balin-tree.svg";
import TreePopup from "./LeafletTreePopup";

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

/**
 * Loop over trees data and generate map markups
 */
const InBoundersMarkups = props => {
    const [Trees, setTrees] = useState(null);

    useEffect(() => {
        props.setLoadTrees(true); // Display loading message
        axios
            .post("http://localhost:5000/trees", {
                bounds: {lon: props.Bounders[1], lat: props.Bounders[0]},
            })
            .then(response => {
                setTrees(response.data);
                props.setLoadTrees(false); // Hide loading message
            })
            .catch(error => {
                props.setLoadTrees(false); // Hide loading message
                console.error(error.message, error.response, error.request);
            });
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
                    Array.from(Trees).map(tree => (
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
                Array.from(Trees).map(tree => (
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
