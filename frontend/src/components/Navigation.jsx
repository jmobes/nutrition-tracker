import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">Dashboard</li>
        <li className="navigation__item">Diary</li>
        <li className="navigation__item">Progress</li>
        <li className="navigation__item">Goals</li>
      </ul>
    </nav>
  );
};

export default Navigation;
