import "./Answer.scss";

function Answer({ submittedAnswer, setSubmittedAnswer, handleSubmit }) {
  return (
    <form className="answer" onSubmit={handleSubmit}>
      <input
        type="text"
        name="answer"
        placeholder="Type answer here..."
        value={submittedAnswer}
        onChange={(event) => {
          setSubmittedAnswer(event.target.value);
        }}
      />
      <button type="submit">Check Answer</button>
    </form>
  );
}
export default Answer;
