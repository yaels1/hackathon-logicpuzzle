import "./SideBar.scss";
import CharacterImage from "../CharacterImage/CharacterImage";
import Answer from "../Answer/Answer";

function SideBar({}) {
  return (
    <section className="sidebar">
      <Answer />
      {/* <CharacterImage /> */}
    </section>
  );
}

export default SideBar;
