import "./LogicPuzzle.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_API_URL;

function LogicPuzzle() {
  const [characters, setCharacters] = useState(null);

  const fetchCharacters = async () => {
    const response = await axios.get(`${baseUrl}/characters`);
    // console.log(response.data);
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
          <div className="character__info">
            <p className="character__text character__name"> {character.name}</p>
            <p className="character__text character__fact">
              fact: {character.fact}
            </p>
            <p className="character__text character__pages">
              hint: {character.hint}
            </p>

            {/* <img src={character.image} className="character__image" /> */}
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default LogicPuzzle;

// <table className="table">
//   <tr className="table__column">
//     <th></th>
//     <th className="table__column-item">1</th>
//     <th className="table__column-item">2</th>
//     <th className="table__column-item">3</th>
//     <th className="table__column-item">4</th>
//   </tr>

//   <tr className="table__row">
//     <td></td>
//     <td className="table__row-item">A</td>
//     <td className="table__row-item">A</td>;
//     <td className="table__row-item">A</td>
//     <td className="table__row-item">A</td>
//   </tr>

//   <tr>
//     <td></td>
//     <td className="table__row-item">B</td>
//     <td className="table__row-item">B</td>
//     <td className="table__row-item">B</td>
//     <td className="table__row-item">B</td>
//   </tr>

//   <tr>
//     <td></td>
//     <td className="table__row-item">C</td>
//     <td className="table__row-item">C</td>
//     <td className="table__row-item">C</td>
//     <td className="table__row-item">C</td>
//   </tr>
// </table>
