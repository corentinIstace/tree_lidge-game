import {useMapEvents} from "react-leaflet";

/**
 * Handler detecting the center position for the current view on the map and update the state.
 * @param {*} props State of center position
 */
const CenterLocatorHandler = props => {
    const mapEvents = useMapEvents({
        moveend: () => {
            props.setMapCenter(mapEvents.getCenter());
        },
    });
    console.log("center", props.mapCenter);
    return null;
};

export default CenterLocatorHandler;
