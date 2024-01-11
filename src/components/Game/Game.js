import "./Game.scss";
import SideBar from "../SideBar/SideBar";
import LogicPuzzle from "../LogicPuzzle/LogicPuzzle";

function Game() {
  return (
    <section className="game">
      <SideBar />
      <LogicPuzzle />
    </section>
  );
}

export default Game;
