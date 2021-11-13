import React, {useState} from "react";
import styled from "styled-components";
import {MapContainer, TileLayer, Rectangle} from "react-leaflet";
import SomePointers from "../client/components/LeafletLocalData";
import ZoomHandler from "../client/components/LeafletZoomHandler";
import CenterLocatorHandler from "../client/components/LeafletCenterViewHandler";
import {
    initialCenterCoordinates,
    mapLimits,
    minZoomLimit,
    maxZoomLimit,
} from "../client/components/LeafletConstValues";

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

const Gamepage = () => {
    const [zoomLevel, setZoomLevel] = useState(15); // initial zoom level provided for MapContainer
    const [mapCenter, setMapCenter] = useState(initialCenterCoordinates);
    const [boundsView, setBoundsView] = useState(null);

    return (
        <GameContainer>
            <Nav>
                <Button>{"Menu"}</Button>
                <Button>{"Logout"}</Button>
            </Nav>
            <MapContainer
                style={{height: mapHeight}}
                center={mapCenter}
                zoom={zoomLevel}
                scrollWheelZoom={false}
                whenCreated={map => {
                    // Update bounds when map is loaded
                    setBoundsView(map.getBounds());
                }}
                maxBounds={mapLimits}
                minZoom={minZoomLimit}
                maxZoom={maxZoomLimit}>
                <ZoomHandler
                    zoomLevel={zoomLevel}
                    setZoomLevel={setZoomLevel}
                />
                <CenterLocatorHandler
                    mapCenter={mapCenter}
                    setMapCenter={setMapCenter}
                    setBoundsView={setBoundsView}
                />
                <Rectangle
                    center={mapCenter}
                    bounds={boundsView || initialBounds}
                />
                <TileLayer
                    attribution={
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                />
                <SomePointers zoomLevel={zoomLevel} />
                {/* <Rectangle bounds={mapLimits} /> // Rectangle to display map limits*/}
            </MapContainer>
            <Counts>
                <p>{"Trees : 40"}</p>
                <p>{"Leaves : 5000"}</p>
            </Counts>
        </GameContainer>
    );
};
export default Gamepage;

/**
 * Main container of the current page.
 */
const GameContainer = styled.section`
    position: relative;
    width: 100%;
    background-color: yellow;
`;

/**
 * Navbar.
 */
const Nav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 90%;
    position: absolute;
    top: 10px;
    left: 5vw;
    z-index: 999;
`;

/**
 * Buttons in the navbar.
 */
const Button = styled.button`
    background-color: blue;
    border: none;
    border: solid 1 darkblue;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 20px;
`;

/**
 * Informative display for the player.
 * Show number of trees and leaves owned by the player.
 */
const Counts = styled.article`
    background-color: green;
    position: absolute;
    bottom: 2vh;
    right: 2vh;
    padding: 20px;
    width: 35vw;
    z-index: 999;
`;
