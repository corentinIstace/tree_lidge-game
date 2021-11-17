// TEMP
import React from "react";
import {v4 as uuidv4} from "uuid";
import Trees from "../../ressources/data.json";
import {Marker, CircleMarker, Popup} from "react-leaflet";
import icon from "../../ressources/img/jean-victor-balin-tree.svg";
import TreePopup from "./LeafletTreePopup";
import styled from "styled-components";

/**
 * Loop over trees data and generate map markups
 */
const InBoundersMarkups = props => {
    const Leaflet = window.L;
    const treeIcon = Leaflet.icon({
        iconUrl: icon,
        iconSize: [
            (9 * (props.zoomLevel * 2)) / 30,
            (45 * (props.zoomLevel * 2)) / 30,
        ], // size of the icon
        iconAnchor: [5, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [5, -40], // point from which the popup should open relative to the iconAnchor
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

export default InBoundersMarkups;
