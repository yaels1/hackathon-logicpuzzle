import "./CharacterImage.scss";

function CharacterImage({
  currentCharacter,
  revealImage,
  submittedAnswer,
  wrongAnswer,
}) {
  if (!currentCharacter) {
    return <p>Loading...</p>;
  }

  if (
    revealImage &&
    currentCharacter.name.toLowerCase() === submittedAnswer.toLowerCase()
  ) {
    return (
      <div className="image">
        <img
          src={currentCharacter.image}
          alt="image of last correctly guess character"
          className="image__img"
        />
        <p>You got it!</p>
      </div>
    );
  } else {
    return (
      <>
        {wrongAnswer && (
          <>
            <p className="game__wrong">this is the wrong answer</p>
            <p className="game__wrong"> guess again!</p>
          </>
        )}
        <p className="image">Who could it be...?</p>
      </>
    );
  }
}

export default CharacterImage;
