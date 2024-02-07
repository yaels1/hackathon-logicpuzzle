import "./Game.scss";
import SideBar from "../SideBar/SideBar";
import LogicPuzzle from "../LogicPuzzle/LogicPuzzle";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const baseUrl = process.env.REACT_APP_API_URL;

function Game() {
  // let { characterId } = useParams();
  // const [characters, setCharacters] = useState(null);
  // const [currentCharacter, setCurrentCharacter] = useState(null);

  // if (!characterId) {
  //   characterId = "1";
  // }
  // const fetchCharacters = async () => {
  //   const response = await axios.get(`${baseUrl}/characters`);
  //   console.log(response);
  //   setCharacters(response.data);
  // };

  // useEffect(() => {
  //   fetchCharacters();
  // }, []);

  // const fetchCurrentCharacter = async (currentCharacterId) => {
  //   if (!currentCharacterId) {
  //     const characterList = await axios.get(
  //       `${baseUrl}/characters/${currentCharacterId}`
  //     );
  //     currentCharacterId = characterList.data[0].id;
  //   }

  //   const response = await axios.get(
  //     `${baseUrl}/characters/${currentCharacterId}`
  //   );

  //   setCurrentCharacter(response.data.image);
  // };
  // useEffect(() => {
  //   fetchCurrentCharacter();
  // }, []);

  // fetchCurrentCharacter(characterId);

  return (
    <section className="game">
      {/* <SideBar currentCharacter={currentCharacter} /> */}
      <SideBar />
      {/* <LogicPuzzle characters={characters} /> */}
      <LogicPuzzle />
    </section>
  );
}

export default Game;
