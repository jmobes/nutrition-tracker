import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <Link to="/">
          <li className="navigation__item">Dashboard</li>
        </Link>
        <Link to="/diary">
          <li className="navigation__item">Diary</li>
        </Link>
        <Link to="/progress">
          <li className="navigation__item">Progress</li>
        </Link>
        <Link to="/goals">
          <li className="navigation__item">Goals</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
