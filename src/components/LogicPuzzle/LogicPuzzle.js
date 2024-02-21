import "./LogicPuzzle.scss";

function LogicPuzzle({ characters, currentCharacter, finalAnswer }) {
  if (!characters || !currentCharacter) return <p>there is an error</p>;

  return (
    <div className="characters">
      {characters.map((character) => (
        <div className="characters__container" key={character.id}>
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
    </div>
  );
}

export default LogicPuzzle;
