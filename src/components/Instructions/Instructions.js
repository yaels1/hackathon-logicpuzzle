import "./Instructions.scss";
import InstructionsList from "../InstructionsList/InstructionsList";

function Instructions() {
  return (
    <>
      <section className="instructions">
        <h2 className="instructions__title">How to play</h2>
        <div className="instuctions__main">
          <InstructionsList />
        </div>
      </section>
    </>
  );
}

export default Instructions;
