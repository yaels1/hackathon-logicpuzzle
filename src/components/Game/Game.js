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
  const [revealImage, setRevealImage] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const fetchAllCharacters = async () => {
    try {
      const response = await axios.get(`${baseUrl}/characters`);
      setCharacters(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSingleCharacter = async (id) => {
    if (Number(id) === 13) {
      setFinalAnswer(true);
      console.log("this is peach");
    } else {
      try {
        const response = await axios.get(`${baseUrl}/characters/${id}`);
        setCurrentCharacter(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const answer = event.target.answer.value;

    if (answer.toLowerCase() === currentCharacter.name.toLowerCase()) {
      if (Number(currentCharacter.id) === 12) {
        fetchSingleCharacter(Number(currentCharacter.id) + 1)
          .then(() => {})
          .catch((error) => {
            console.error(error);
          });
      } else if (fetchSingleCharacter(Number(currentCharacter.id) + 1)) {
        setRevealImage(true);
        setWrongAnswer(false);
        console.log("Correct answer!");
      }
    } else {
      setWrongAnswer(true);
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
        {!finalAnswer && (
          <Answer
            submittedAnswer={submittedAnswer}
            handleSubmit={handleSubmit}
            setSubmittedAnswer={setSubmittedAnswer}
          />
        )}

        <CharacterImage
          currentCharacter={currentCharacter}
          revealImage={revealImage}
          submittedAnswer={submittedAnswer}
          wrongAnswer={wrongAnswer}
          finalAnswer={finalAnswer}
        />
      </div>
      <div className="game__puzzle">
        <LogicPuzzle
          characters={characters}
          currentCharacter={currentCharacter}
          finalAnswer={finalAnswer}
        />
      </div>
    </section>
  );
}

export default Game;
