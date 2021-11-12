import {useMapEvents} from "react-leaflet";

/**
 * @returns Get bounds of the view and convert it into an array of coordinates
 */
const convertBounds = mapEvents => {
    const currentBounds = mapEvents.getBounds();
    const Bounds = [
        [currentBounds.getNorthEast().lat, currentBounds.getNorthEast().lng],
        [currentBounds.getSouthWest().lat, currentBounds.getSouthWest().lng],
    ];
    return Bounds;
};

/**
 * Handler detecting the center position and the current view bounds on the map, and update the state.
 * Update when map is loaded and when map move end.
 */
const CenterLocatorHandler = props => {
    const mapEvents = useMapEvents({
        load: () => {
            props.setBoundsView(convertBounds(mapEvents));
        },
        moveend: () => {
            props.setMapCenter(mapEvents.getCenter());
            props.setBoundsView(convertBounds(mapEvents));
        },
    });
    console.log("view area", convertBounds(mapEvents));
    return null;
};

export default CenterLocatorHandler;
