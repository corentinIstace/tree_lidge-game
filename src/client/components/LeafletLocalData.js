// TEMP
import React from "react";
import {v4 as uuidv4} from "uuid";
import Trees from "../../ressources/data.json";
import {Marker, CircleMarker, Popup} from "react-leaflet";
import icon from "../../ressources/img/jean-victor-balin-tree.svg";
import TreePopup from "./LeafletTreePopup";
import styled from "styled-components";

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
    const xSize = 9 * Factor(props.zoomLevel);
    const ySize = 45 * Factor(props.zoomLevel);

    const Leaflet = window.L;
    const treeIcon = Leaflet.icon({
        iconUrl: icon,
        iconSize: [xSize, ySize], // size of the icon
        iconAnchor: [45 * (xSize / 50), 40 * (ySize / 50)], // point offset of the icon which will correspond to marker's location
        popupAnchor: [-12, -90], // point offset from which the popup should open relative to the iconAnchor
    });

    /**
     * Display tree with less elements (wide view)
     */
    if (props.zoomLevel < 18) {
        return (
            <>
                {Array.from(Trees)
                    .filter(tree => {
                        // Filter trees with coordinates and inside the given bounders.
                        const bounds = Leaflet.latLngBounds(props.Bounders);
                        return bounds.contains(tree.geoloc);
                    })
                    .map(tree => (
                        // TODO use id when connected to mongoDB
                        // eslint-disable-next-line react/jsx-key
                        <CircleMarker
                            /* key={tree.id} */
                            color={"#00ff00"}
                            center={tree.geoloc}
                            radius={2}
                        />
                    ))}
            </>
        );
    }

    return (
        <>
            {Array.from(Trees)
                .filter(tree => {
                    // Filter trees with coordinates and inside the given bounders.
                    const bounds = Leaflet.latLngBounds(props.Bounders);
                    return bounds.contains(tree.geoloc);
                })
                .map(tree => {
                    const id = uuidv4();
                    return (
                        <Marker
                            key={String(id)}
                            position={tree.geoloc}
                            icon={treeIcon}>
                            <StyledPop>
                                <TreePopup tree={tree} />
                            </StyledPop>
                        </Marker>
                    );
                })}
        </>
    );
};

const StyledPop = styled(Popup)`
    .leaflet-popup-content-wrapper {
        background-color: lightgreen;
        width: 400px;
    }
    /* 
.leaflet-popup-tip-container {
    visibility: hidden;
} */
`;

export default InBoundersMarkups;
