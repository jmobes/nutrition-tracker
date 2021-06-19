import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">dashboard</li>
        <li className="navigation__item">goals</li>
        <li className="navigation__item">diary</li>
        <li className="navigation__item">progress</li>
      </ul>
    </nav>
  );
};

export default Navigation;
