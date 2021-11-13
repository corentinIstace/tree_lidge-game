// TEMP
import React from "react";
import {v4 as uuidv4} from "uuid";
import Trees from "../../ressources/arbustum.json";
import {Marker, Popup} from "react-leaflet";
/**
 * Loop over trees data and generate map markups
 */
const SomePointers = props => {
    /**
     * Do not display trees if zoom map too wide
     */
    if (props.zoomLevel < 17) {
        return <div />;
    }
    return (
        <>
            {Array.from(Trees)
                .slice(0, 100)
                .map(tree => {
                    /**
                     * Do not display trees missing coordinates
                     */
                    if (!tree.geoloc || !tree.geoloc.lon || !tree.geoloc.lat) {
                        return <div />;
                    }
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

export default SomePointers;
