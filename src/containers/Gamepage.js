import React from "react";
import styled from "styled-components";
import {MapContainer, TileLayer /* Rectangle */} from "react-leaflet";
import SomePointers from "../client/components/SomePointers";

/**
 * Coordinate of Liège center.
 * Give center position of the map.
 */
const initialCoordinate = [50.6382, 5.5683];

/**
 * Limit of the map. Player is pushed back into the limits if try to go out these bounds.
 */
const mapLimits = [
    [50.5722, 5.4983],
    [50.7022, 5.68683],
];

/**
 * Limits of zoom. Player cannot zoom too close or too away.
 */
const minZoomLimit = 14;
const maxZoomLimit = 18;

/**
 * Height of the map display.
 * Necessary value to display the map.
 */
const mapHeight = "80vh";

const Gamepage = () => (
    <GameContainer>
        <Nav>
            <Button>{"Menu"}</Button>
            <Button>{"Logout"}</Button>
        </Nav>
        <MapContainer
            style={{height: mapHeight}}
            center={initialCoordinate}
            zoom={15}
            scrollWheelZoom={false}
            maxBounds={mapLimits}
            minZoom={minZoomLimit}
            maxZoom={maxZoomLimit}>
            <TileLayer
                attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <SomePointers />
            {/* <Rectangle bounds={mapLimits} /> // Rectangle to display map limits*/}
        </MapContainer>
        <Counts>
            <p>{"Trees : 40"}</p>
            <p>{"Leaves : 5000"}</p>
        </Counts>
    </GameContainer>
);

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
`;
