import "./LogicPuzzle.scss";

function LogicPuzzle({ characters, currentCharacter, finalAnswer }) {
  if (!characters || !currentCharacter) return <p>there is an error</p>;

  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // }

  // const shuffledCharacters = shuffleArray(
  //   characters.map((character) => [character.id, character])
  // );
  // setShuffledCharacters(shuffledCharacters);

  return (
    <div className="characters">
      {/* {[...shuffledCharacters.values()].map((character) => ( */}
      {characters.map((character) => (
        <div className="characters__container" key={character.id}>
          <div className="characters__index">{character.id}</div>

          {Number(character.id) === 12 && finalAnswer ? (
            <div className="characters__cell">
              <div className="characters__info">
                <p className="characters__text characters__name">
                  {character.name}
                </p>
                <p className="characters__text characters__fact">
                  {character.fact}
                </p>
                <p className="characters__text characters__hint">
                  hint: {character.hint}
                </p>
                <div className="characters__image-container">
                  <img src={character.image} className="characters__image" />
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`characters__cell${
                Number(character.id) >= Number(currentCharacter.id)
                  ? " characters__cell--hidden"
                  : ""
              }`}
            >
              <div className="characters__info">
                <p className="characters__text characters__name">
                  {character.name}
                </p>
                <p className="characters__text characters__fact">
                  {character.fact}
                </p>
                <p className="characters__text characters__hint">
                  hint: {character.hint}
                </p>
              </div>
              <div className="characters__image-container">
                <img src={character.image} className="characters__image" />
              </div>
            </div>
          )}
        </div>
      ))}
      {finalAnswer && (
        <p>
          Congrats! you've found princess peach and completed the logic puzzle!
        </p>
      )}
    </div>
  );
}

export default LogicPuzzle;
