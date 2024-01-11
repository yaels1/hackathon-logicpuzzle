import "./Answer.scss";
function Answer() {
  return (
    <form className="answer">
      <input
        type="text"
        name="answer__box"
        id="answer__box"
        placeholder="Type answer here..."
      />
      <button type="submit">Check Answer</button>
    </form>
  );
}

export default Answer;
