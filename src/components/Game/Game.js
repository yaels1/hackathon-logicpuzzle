import "./Game.scss";
import LogicPuzzle from "../LogicPuzzle/LogicPuzzle";
import Answer from "../Answer/Answer";
import CharacterImage from "../CharacterImage/CharacterImage";

import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_API_URL;

function Game() {
  const [characters, setCharacters] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  // const [revealedCharacterIds, setRevealedCharacterIds] = useState([]);

  const fetchAllCharacters = async () => {
    try {
      const response = await axios.get(`${baseUrl}/characters`);
      setCharacters(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSingleCharacter = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/characters/${id}`);
      setCurrentCharacter(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const answer = event.target.answer.value;

    if (answer.toLowerCase() === currentCharacter.name.toLowerCase()) {
      fetchSingleCharacter(Number(currentCharacter.id) + 1);
      console.log("Correct answer!");
    } else {
      console.log("Incorrect answer!");
    }

    setSubmittedAnswer("");
  };

  useEffect(() => {
    fetchAllCharacters();
    fetchSingleCharacter(1);
  }, []);

  return (
    <section className="game">
      <div className="game__answer">
        <Answer
          currentCharacter={currentCharacter}
          submittedAnswer={submittedAnswer}
          handleSubmit={handleSubmit}
          setSubmittedAnswer={setSubmittedAnswer}
        />

        <CharacterImage currentCharacter={currentCharacter} />
      </div>
      <div className="game__puzzle">
        <LogicPuzzle
          characters={characters}
          currentCharacter={currentCharacter}
        />
      </div>
    </section>
  );
}

export default Game;
