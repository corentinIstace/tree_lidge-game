import react from "react";
import styled from "styled-components";

const Homepage = () => {
  return (
    <>
      <Title>Tree Lidge</Title>
      <Wrapper>
        <Tile>Leader board</Tile>
        <Tile>Profile</Tile>
        <Tile>Success</Tile>
        <Tile>Challenges</Tile>
      </Wrapper>
    </>
  );
};

export default Homepage;

const Title = styled.h1`
  margin: 50px;
  width: max-content;
  margin-right: auto;
  margin-left: auto;
  background-color: #a53131;
  color: black;
`;

const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  /**
  * Fit components in wrapper from their sizes (grid of 4 buttons)
  * Total wrapper width = width * 2 + margin * 4
  */
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  background-color: #d9ff00;
  -ms-transform: translateY(25vh);
  transform: translateY(25vh);
`;

const Tile = styled.button`
  background-color: #2f00ff;
  width: 100px;
  height: 100px;
  margin: 20px;
  border-radius: 5px;
  border: solid 1px green;
  font-size: 1em;
`;
