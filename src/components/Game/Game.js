import "./Game.scss";
import SideBar from "../SideBar/SideBar";
import LogicPuzzle from "../LogicPuzzle/LogicPuzzle";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Game() {
  let { characterId } = useParams();
  const [characters, setCharacters] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  if (!characterId) {
    characterId = "1";
  }
  useEffect(() => {
    const baseUrl = process.env.REACT_APP_API_URL;

    const fetchCharacters = async () => {
      const response = await axios.get(`${baseUrl}/characters`);
      console.log(response);
    };

    const fetchCurrentCharacter = async (currentCharacterId) => {
      if (!currentCharacterId) {
        const characterList = await axios.get(
          `${baseUrl}/characters/${currentCharacterId}`
        );
        currentCharacterId = characterList.data[0].id;
      }

      const response = await axios.get(
        `${baseUrl}/characters/${currentCharacterId}`
      );

      setCurrentCharacter(response.data.image);
    };

    fetchCharacters();
    fetchCurrentCharacter(characterId);
  }, [characterId]);

  return (
    <section className="game">
      <SideBar currentCharacter={currentCharacter} />
      <LogicPuzzle characters={characters} />
    </section>
  );
}

export default Game;
