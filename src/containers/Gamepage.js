import React, {useState} from "react";
import styled from "styled-components";
import {MapContainer, TileLayer} from "react-leaflet";
import InBoundersMarkups from "../client/components/LeafletLocalData";
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
    const [mapCenter, setMapCenter] = useState(initialCenterCoordinates); // set center of the map view
    const [boundsView, setBoundsView] = useState(initialBounds); // set bounds of the map view (user screen)
    const [userTrees, setUserTrees] = useState(0); // number of trees owned
    const [userLeaves, setUserLeaves] = useState(5000); // Number of leaves owned
    const [userName] = useState("Bertrand"); // TODO remove for global username variable

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
                    const bounds = map.getBounds();
                    setBoundsView([
                        [bounds.getNorthEast().lat, bounds.getNorthEast().lng],
                        [bounds.getSouthWest().lat, bounds.getSouthWest().lng],
                    ]);
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
                <TileLayer
                    maxNativeZoom={19}
                    maxZoom={maxZoomLimit}
                    attribution={
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                />
                <InBoundersMarkups
                    zoomLevel={zoomLevel}
                    Bounders={boundsView}
                    userName={userName}
                    userTrees={userTrees}
                    setUserTrees={setUserTrees}
                    userLeaves={userLeaves}
                    setUserLeaves={setUserLeaves}
                />
                {/* <Rectangle bounds={mapLimits} /> // Rectangle to display map limits*/}
            </MapContainer>
            <Counts>
                <p>
                    {"Trees : "} {userTrees}
                </p>
                <p>
                    {"Leaves : "} {userLeaves}
                </p>
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
    background-color: rgba(54, 198, 96, 0.8);
    border: none;
    border: solid 1 darkblue;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 20px;

    :hover {
        -webkit-transform: scale(1.05); /* Safari et Chrome */
        -moz-transform: scale(1.05); /* Firefox */
        -ms-transform: scale(1.05); /* Internet Explorer 9 */
        -o-transform: scale(1.05); /* Opera */
        transform: scale(1.05);
        text-decoration: underline;
    }
`;

/**
 * Informative display for the player.
 * Show number of trees and leaves owned by the player.
 */
const Counts = styled.article`
    background-color: rgba(54, 198, 96, 0.8);
    position: absolute;
    text-align: right;
    bottom: 2vh;
    right: 2vh;
    padding: 20px;
    width: 35vw;
    z-index: 999;
`;
