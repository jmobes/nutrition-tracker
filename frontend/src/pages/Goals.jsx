import "./Goals.css";

const Goals = () => {
  return (
    <section className="goals">
      <h2 className="goals__title">Your Fitness Goals</h2>
      <p className="goals__description">
        In order to achieve your goals, you need to know your{" "}
        <strong>Total Daily Energy Expenditure</strong>.
      </p>
      <p className="goals__tdee">
        Calculate your TDEE <a href="#">HERE</a>
      </p>

      <div className="goals__tables">
        <div className="goals__tables__calories">
          <div className="goals__tables__calories__header">
            <h3 className="goals__tables__calories__header__title">
              Daily Nutrition Goals
            </h3>
            <button className="goals__tables__button">Edit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
