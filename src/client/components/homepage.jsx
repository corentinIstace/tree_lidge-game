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
  margin-top: 100px;
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
  * 80 = 30 * 2 + 5 * 4
  */
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  background-color: #d9ff00;
  transform: translateY(10vh);
`;

const Tile = styled.button`
  background-color: #2f00ff;
  width: 30vw;
  height: 200px;
  margin: 20px;
  margin-left: 5vw;
  margin-right: 5vw;
  border-radius: 5px;
  border: solid 1px green;
  font-size: 1em;
`;
