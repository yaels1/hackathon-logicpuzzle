import "./Instructions.scss";

function Instructions() {
  return (
    <>
      <section className="instructions">
        <h2 className="instructions__title">How to play</h2>
        <div className="instuctions__main">
          <div className="instructions__list">
            <p className="instructions__list-item">
              Your aim is to save Princess Peach
            </p>
            <p className="instructions__list-item">
              the first character is Toad! Type this in to start the game and
              get the first hint
            </p>
            <p className="instructions__list-item">
              read the fact about the current character and use the hint to find
              the next one
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Instructions;
