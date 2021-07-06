import "./Header.css";
import Navigation from "./Navigation";
import LogInOut from "./LogInOut";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <h1>Count It</h1>
        <LogInOut />
      </div>
      <div className="header__nav">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
