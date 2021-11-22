import {useMapEvents} from "react-leaflet";

/**
 * Get bounds of the view and convert it into an array of coordinates
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
            // When map finish loading
            // set current view bounds
            props.setBoundsView(convertBounds(mapEvents));
        },
        moveend: () => {
            // When move or zoom change on the map finish
            // Set the new center coordinates and set current view bounds
            props.setMapCenter(mapEvents.getCenter());
            props.setBoundsView(convertBounds(mapEvents));
        },
    });
    return null;
};

/**
 * Handler to get zoom when player change the zoom level and make it available on gamepage.
 */
function ZoomHandler(props) {
    const mapEvents = useMapEvents({
        zoomend: () => {
            props.setZoomLevel(mapEvents.getZoom());
        },
    });
    return null;
}

export {CenterLocatorHandler, ZoomHandler};
