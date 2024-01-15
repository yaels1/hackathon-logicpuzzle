import defaultImage from "../../assets/images/toad.jpg";

function Image(currentCharacter) {
  console.log(currentCharacter);
  return <img src={defaultImage} alt="first one" />;
}

export default Image;
