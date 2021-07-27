import { Link } from "react-router-dom";
import "./Header.css";
import LogInOut from "./LogInOut";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Link to="/">
          <h1>Count It</h1>
        </Link>
        <LogInOut />
      </div>
    </header>
  );
};

export default Header;
