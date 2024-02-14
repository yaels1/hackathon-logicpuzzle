import "./InstructionsList.scss";

function InstructionsList() {
  return (
    <div className="instructions-list">
      <p className="instructions-list__item">
        Your aim is to save Princess Peach
      </p>
      <p className="instructions-list__item">
        the first character is Toad! Type this in to start the game and get the
        first hint
      </p>
      <p className="instructions-list__item">
        {" "}
        read the fact about the current character and use the hint to find the
        next one
      </p>
    </div>
  );
}

export default InstructionsList;
