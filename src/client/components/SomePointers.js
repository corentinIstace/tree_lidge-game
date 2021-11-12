// TEMP
import React from "react";
import {v4 as uuidv4} from "uuid";
import Trees from "../../ressources/arbustum.json";
import {Marker, Popup} from "react-leaflet";
const SomePointers = () => (
    <>
        {Array.from(Trees)
            .slice(9000, 10000)
            .map(tree => {
                const id = uuidv4();
                if (!tree.geoloc || !tree.geoloc.lon || !tree.geoloc.lat) {
                    return <div />;
                }
                return (
                    <Marker key={String(id)} position={tree.geoloc}>
                        <Popup>{String(id)}</Popup>
                    </Marker>
                );
            })}
    </>
);

export default SomePointers;
