// TEMP
import React from "react";
import {v4 as uuidv4} from "uuid";
import Trees from "../../ressources/data.json";
import {Marker, Popup} from "react-leaflet";
import icon from "../../ressources/img/jean-victor-balin-tree.svg";
import TreePopup from "./LeafletTreePopup";

/**
 * Loop over trees data and generate map markups
 */
const InBoundersMarkups = props => {
    const Leaflet = window.L;

    /**
     * Do not display trees if zoom map too wide
     */
    if (props.zoomLevel < 18) {
        return <div />;
    }

    const treeIcon = Leaflet.icon({
        iconUrl: icon,
        iconSize: [9, 45], // size of the icon
        iconAnchor: [5, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [5, -40], // point from which the popup should open relative to the iconAnchor
    });

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
                            <Popup>
                                <TreePopup tree={tree} />
                            </Popup>
                        </Marker>
                    );
                })}
        </>
    );
};

export default InBoundersMarkups;
