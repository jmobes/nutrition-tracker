import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Goals.css";

const Goals = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [calories, setCalories] = useState("");
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [tdee, setTdee] = useState("");
  const [error, setError] = useState(null);

  const url = "http://localhost:5000/api";

  useEffect(() => {
    fetch(`${url}/tdee/60fd1eceef841b3e8820c66f`)
      .then((result) => result.json())
      .then((json) => {
        if (json.status === "fail") {
          throw new Error(json.message);
        }
        setTdee(json.tdee);
      })
      .catch((ex) => setError(ex.message));
  }, []);

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
        Calculate your <strong>TDEE</strong>{" "}
        <Link to="/tdee-calculator">HERE</Link>
      </p>
      {tdee ? (
        <p className="goals__calculatedTDEE">
          Your TDEE is: <span>{tdee} calories</span>
        </p>
      ) : null}
      <div className="goals__tables">
        <div className="goals__tables__weight">
          <div className="goals__tables__weight__header">
            <h3 className="goals__tables__weight__header__title">Weight</h3>
            <button className="goals__tables__button">Edit</button>
          </div>
          <div className="goals__tables__weight__row">
            <p className="goals__tables__weight__key">
              <strong>Current Weight</strong>
            </p>
            <p className="goals__tables__weight__value">170 lbs</p>
          </div>
          <div className="goals__tables__weight__row">
            <p className="goals__tables__weight__key">
              <strong>Goal Weight</strong>
            </p>
            <p className="goals__tables__weight__value">160 lbs</p>
          </div>
        </div>
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
      </div>
    </section>
  );
};

export default Goals;
