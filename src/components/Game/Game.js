import "./Game.scss";
import SideBar from "../SideBar/SideBar";
import LogicPuzzle from "../LogicPuzzle/LogicPuzzle";

const baseUrl = process.env.REACT_APP_API_URL;

function Game() {
  return (
    <section className="game">
      <SideBar />
      <LogicPuzzle />
    </section>
  );
}

export default Game;
