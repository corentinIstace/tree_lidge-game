import styled from "styled-components";

const Game = () => {
  return (
    <GameContainer>
      <Nav>
        <Button>Menu</Button>
        <Button>Logout</Button>
      </Nav>
      <Counts>
        <p>Trees : 40</p>
        <p>Leaves : 5000</p>
      </Counts>
    </GameContainer>
  );
};

export default Game;

const GameContainer = styled.section`
  background-color: yellow;
  position: relative;
  width: 100%;
  height: 100vh;
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
