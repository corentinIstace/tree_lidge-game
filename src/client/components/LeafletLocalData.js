// TEMP
import React from "react";
import {v4 as uuidv4} from "uuid";
import Trees from "../../ressources/arbustum.json";
import {Marker, Popup} from "react-leaflet";

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

    return (
        <>
            {Array.from(Trees)
                .filter(tree => {
                    // Filter trees with coordinates and inside the given bounders.
                    const bounds = Leaflet.latLngBounds(props.Bounders);
                    return (
                        tree.geoloc &&
                        tree.geoloc.lon &&
                        tree.geoloc.lat &&
                        bounds.contains(tree.geoloc)
                    );
                })
                .map(tree => {
                    const id = uuidv4();
                    return (
                        <Marker key={String(id)} position={tree.geoloc}>
                            <Popup>{String(id)}</Popup>
                        </Marker>
                    );
                })}
        </>
    );
};

export default InBoundersMarkups;
