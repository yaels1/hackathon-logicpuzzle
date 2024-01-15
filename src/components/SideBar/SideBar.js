import "./SideBar.scss";
import CharacterImage from "../CharacterImage/CharacterImage";
import Answer from "../Answer/Answer";

function SideBar({ currentCharacter }) {
  return (
    <section className="sidebar">
      <Answer />
      <CharacterImage image={currentCharacter} />
    </section>
  );
}

export default SideBar;
