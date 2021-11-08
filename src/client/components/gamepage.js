import React from "react";
import styled from "styled-components";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

const Game = () => (
    <GameContainer>
        {/* <Map id={"map"}> */}
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}>
            <TileLayer
                attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    {"A pretty CSS3 popup. "}
                    <br />
                    {" Easily customizable."}
                </Popup>
            </Marker>
        </MapContainer>
        {/* </Map> */}
        <Nav>
            <Button>{"Menu"}</Button>
            <Button>{"Logout"}</Button>
        </Nav>
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
    height: 100vh;
`;

/* const Map = styled.div`
    height: 400px;
`; */

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
