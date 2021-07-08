import "./Goals.css";

const Goals = () => {
  return (
    <section className="goals">
      <h2 className="goals__title">Your Fitness Goals</h2>
      <p className="goals__description">
        In order to achieve your goals, you need to know your{" "}
        <strong>Total Daily Energy Expenditure</strong>. This number tells you
        how many calories your body needs to maintain its current weight. A good
        rule of thumb to follow when losing or gaining weight is to eat 500
        calories less or more than your <strong>TDEE</strong>. Over the span of
        a week, you will either lose a pound or gain a pound.
      </p>
      <p className="goals__tdee">
        Calculate your <strong>TDEE</strong> <a href="#">HERE</a>
      </p>
      <div className="goals__tables">
        <div className="goals__tables__calories">
          <div className="goals__tables__calories__header">
            <h3 className="goals__tables__calories__header__title">
              Daily Nutrition Goals
            </h3>
            <button className="goals__tables__button">Edit</button>
          </div>
          <div className="goals__tables__calories__row">
            <p className="goals__tables__calories__key">
              <strong>Calories</strong>
            </p>
            <p className="goals__tables__calories__value">1800</p>
          </div>
          <div className="goals__tables__calories__row">
            <p className="goals__tables__calories__key">
              <strong>Carbohydrates</strong> <span>225 g</span>
            </p>
            <p className="goals__tables__calories__value">50%</p>
          </div>
          <div className="goals__tables__calories__row">
            <p className="goals__tables__calories__key">
              <strong>Fat</strong> <span>60 g</span>
            </p>
            <p className="goals__tables__calories__value">10%</p>
          </div>
          <div className="goals__tables__calories__row">
            <p className="goals__tables__calories__key">
              <strong>Protein</strong> <span>90 g</span>
            </p>
            <p className="goals__tables__calories__value">40%</p>
          </div>
        </div>
        <div className="goals__tables__micros">
          <div className="goals__tables__micros__header">
            <h3 className="goals__tables__micros__header__title">
              Micronutrients
            </h3>
            <button className="goals__tables__button">Edit</button>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Saturated Fat</strong>
            </p>
            <p className="goals__tables__micros__value">21 g</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Polysaturated Fat</strong>
            </p>
            <p className="goals__tables__micros__value">0 g</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Monosaturated Fat</strong>
            </p>
            <p className="goals__tables__micros__value">0 g</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Trans Fat</strong>
            </p>
            <p className="goals__tables__micros__value">0 g</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Cholesterol</strong>
            </p>
            <p className="goals__tables__micros__value">300 mg</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Sodium</strong>
            </p>
            <p className="goals__tables__micros__value">2300 mg</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Potassium</strong>
            </p>
            <p className="goals__tables__micros__value">3500 mg</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Fiber</strong>
            </p>
            <p className="goals__tables__micros__value">38 g</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Sugar</strong>
            </p>
            <p className="goals__tables__micros__value">71 g</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Vitamin A</strong>
            </p>
            <p className="goals__tables__micros__value">100% Daily Value</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Vitamin C</strong>
            </p>
            <p className="goals__tables__micros__value">100% Daily Value</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Calcium</strong>
            </p>
            <p className="goals__tables__micros__value">100% Daily Value</p>
          </div>
          <div className="goals__tables__micros__row">
            <p className="goals__tables__micros__key">
              <strong>Iron</strong>
            </p>
            <p className="goals__tables__micros__value">100% Daily Value</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
