import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Super Mario Logic Puzzle</h1>
      <div className="header__subheader">
        <p className="header__subheader--blue">Help </p>
        <p className="header__subheader--yellow"> save </p>
        <p className="header__subheader--red"> Princess </p>
        <p className="header__subheader--green"> Peach!</p>
      </div>
    </header>
  );
}

export default Header;
