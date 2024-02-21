import "./CharacterImage.scss";

function CharacterImage({
  currentCharacter,
  revealImage,
  submittedAnswer,
  wrongAnswer,
  finalAnswer,
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
            <p className="image__wrong">this is the wrong answer</p>
            <p className="image__wrong"> guess again!</p>
          </>
        )}
        {!finalAnswer && <p className="image">Who could it be...?</p>}
        {finalAnswer && (
          <p className="image__complete">
            Congrats! you've found princess peach and completed the logic
            puzzle!
          </p>
        )}
      </>
    );
  }
}

export default CharacterImage;
