import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Super Mario Logic Puzzle</h1>
      <p className="header__subheader">
        <span className="header__subheader--blue">Help </span>
        <span className="header__subheader--yellow"> save </span>
        <span className="header__subheader--red"> Princess </span>
        <span className="header__subheader--green"> Peach!</span>
      </p>
    </header>
  );
}

export default Header;
