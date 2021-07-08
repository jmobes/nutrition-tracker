import "./Header.css";
import LogInOut from "./LogInOut";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <h1>Count It</h1>
        <LogInOut />
      </div>
    </header>
  );
};

export default Header;
