import "./App.scss";
import Header from "./components/Header/Header.js";
import Instructions from "./components/Instructions/Instructions.js";
import Game from "./components/Game/Game.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <Instructions />
        <Game />
      </main>
    </>
  );
}

export default App;
