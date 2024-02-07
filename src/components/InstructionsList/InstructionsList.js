import "./InstructionsList.scss";

function InstructionsList() {
  return (
    <div className="instructions-list">
      <p className="instructions-list__item">
        Your aim is to save Princess Peach
      </p>
      <p className="instructions-list__item">
        Starting on square
        <span className="instructions-list__item--red"> A1 </span> read the fact
        about the current character and use the hint to find the next one
      </p>
    </div>
  );
}

export default InstructionsList;
