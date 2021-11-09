import React from "react";
import styled from "styled-components";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import SomePointers from "./SomePointers";

const initialCoordinate = [50.6382, 5.5683]; // Center of Liège
const mapHeight = "80vh";

const Game = () => (
    <GameContainer>
        <Nav>
            <Button>{"Menu"}</Button>
            <Button>{"Logout"}</Button>
        </Nav>
        <MapContainer
            style={{height: mapHeight}} // Force leaflet map height
            center={initialCoordinate}
            zoom={15}
            scrollWheelZoom={false}>
            <TileLayer
                attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <Marker position={initialCoordinate}>
                <Popup>
                    {"A pretty CSS3 popup. "}
                    <br />
                    {" Easily customizable."}
                </Popup>
            </Marker>
            <SomePointers />
        </MapContainer>
        <Counts>
            <p>{"Trees : 40"}</p>
            <p>{"Leaves : 5000"}</p>
        </Counts>
    </GameContainer>
);

export default Game;

const GameContainer = styled.section`
    position: relative;
    width: 100%;
    background-color: yellow;
`;

const Nav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
`;

const Button = styled.button`
    background-color: blue;
    border: none;
    border: solid 1 darkblue;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 20px;
`;

const Counts = styled.article`
    background-color: green;
    position: absolute;
    bottom: 2vh;
    right: 2vh;
    padding: 20px;
    width: 35vw;
`;
