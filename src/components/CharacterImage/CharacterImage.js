import "./CharacterImage.scss";

function CharacterImage({ currentCharacter, revealImage, submittedAnswer }) {
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
    return <p className="image">Who could it be...?</p>;
  }
}

export default CharacterImage;
