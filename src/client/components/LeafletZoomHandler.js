import {useMapEvents} from "react-leaflet";

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

export default ZoomHandler;
