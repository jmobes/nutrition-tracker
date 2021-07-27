import { Link } from "react-router-dom";
import "./LogInOut.css";

const LogInOut = () => {
  return (
    <nav className="logInOut">
      <ul className="logInOut__nav">
        <Link to="/login">
          <li className="logInOut__nav__item first">Log In</li>
        </Link>
        <Link to="/signup">
          <li className="logInOut__nav__item">Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
};

export default LogInOut;
