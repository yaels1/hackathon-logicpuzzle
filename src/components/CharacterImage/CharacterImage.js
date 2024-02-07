// import defaultImage from "../../assets/images/toad.jpg";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const baseUrl = process.env.REACT_APP_API_URL;

function Image() {
  const [currentCharacter, setCurrentCharacter] = useState(null);
  let { characterId } = useParams();

  if (!characterId) {
    characterId = "1";
  }

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

  useEffect(() => {
    fetchCurrentCharacter();
  }, []);

  // return <img src={currentCharacter.image} alt="first one" />;
}

export default Image;
