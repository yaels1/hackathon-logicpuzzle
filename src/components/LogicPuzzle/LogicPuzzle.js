import "./LogicPuzzle.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_API_URL;

function LogicPuzzle() {
  const [characters, setCharacters] = useState(null);

  const fetchCharacters = async () => {
    const response = await axios.get(`${baseUrl}/characters`);

    setCharacters(response.data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (!characters) return <p>there is an error</p>;

  return (
    <div className="characters">
      {characters.map((character) => (
        <div className="characters__container" key={character.id}>
          <div className="characters__info">
            <p className="characters__text characters__name">
              {character.name}
            </p>
            <p className="characters__text characters__fact">
              {character.fact}
            </p>
            <p className="characters__text characters__pages">
              hint: {character.hint}
            </p>

            <img src={character.image} className="characters__image" />
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default LogicPuzzle;
