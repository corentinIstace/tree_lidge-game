import React, {useState} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import InBoundersMarkups from "./LeafletLocalData";
import ZoomHandler from "./LeafletZoomHandler";
import CenterLocatorHandler from "./LeafletCenterViewHandler";
import {
    initialCenterCoordinates,
    mapLimits,
    minZoomLimit,
    maxZoomLimit,
} from "./LeafletConstValues";

const Map = props => {
    /**
     * Height of the map display.
     * Necessary value to display the map.
     */
    const mapHeight = "100vh";

    // These values are necessary for the initial display, then will be overwritten by whenCreated of GameContainer
    const initialBounds = [
        [50.64845366378443, 5.5523406982421875],
        [50.628040512635025, 5.534191131591798],
    ];

    const [zoomLevel, setZoomLevel] = useState(18); // initial zoom level provided for MapContainer
    const [mapCenter, setMapCenter] = useState(initialCenterCoordinates); // set center of the map view
    const [boundsView, setBoundsView] = useState(initialBounds); // set bounds of the map view (user screen)
    const [userName] = useState("Bertrand"); // TODO remove for global username variable

    return (
        <MapContainer
            className={"markercluster-map"}
            style={{height: mapHeight}}
            center={mapCenter}
            zoom={zoomLevel}
            scrollWheelZoom={false}
            preferCanvas={true}
            whenCreated={map => {
                // Update bounds when map is loaded
                const bounds = map.getBounds();
                setBoundsView([
                    [bounds.getNorthEast().lat, bounds.getNorthEast().lng],
                    [bounds.getSouthWest().lat, bounds.getSouthWest().lng],
                ]);
            }}
            maxBounds={mapLimits}
            minZoom={minZoomLimit}
            maxZoom={maxZoomLimit}>
            <ZoomHandler zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
            <CenterLocatorHandler
                mapCenter={mapCenter}
                setMapCenter={setMapCenter}
                setBoundsView={setBoundsView}
            />
            <TileLayer
                maxNativeZoom={19} // Zoom level +20 unavailable, use and scale level 19
                maxZoom={maxZoomLimit}
                attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            {
                /* zoomLevel > 16 ? ( */
                <MarkerClusterGroup
                    /**
                     * Documentation markercluster
                     * https://www.npmjs.com/package/leaflet.markercluster
                     * https://github.com/Leaflet/Leaflet.markercluster#usage
                     */
                    disableClusteringAtZoom={18} // Disable clsuetering and display all individual markers
                    maxClusterRadius={100} // Set number of cluster around eachother. Bigger value mean less cluster markers.
                    showCoverageOnHover={false} // Show area of the cluster
                    chunkedLoading={true} // Boolean to split the addLayers processing in to small intervals so that the page *may* not freeze.
                    spiderfyOnMaxZoom={false}>
                    {/* Show markers linked when close to eachother */}
                    <InBoundersMarkups
                        zoomLevel={zoomLevel}
                        Bounders={boundsView}
                        userName={userName}
                        userTrees={props.userTrees}
                        setUserTrees={props.setUserTrees}
                        userLeaves={props.userLeaves}
                        setUserLeaves={props.setUserLeaves}
                    />
                </MarkerClusterGroup> /* 
            ) : (
                <MaxZoomClusters />
            )} */
            }
            {/* <Rectangle bounds={mapLimits} /> // Rectangle to display map limits*/}
        </MapContainer>
    );
};

export default Map;
